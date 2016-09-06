'use strict'

angular.module('vidapp.view', ['ngRoute', 'youtube-embed'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view/:id+', {
            templateUrl: 'view/view.html',
            controller: 'viewCtrl'
        });
    }])
    .controller('viewCtrl', function ($scope, $rootScope, $sce, $routeParams, $http, $interval) {
        var videoId = $routeParams.id;
        $scope.video = {
            id: videoId
        };

        $scope.playerVars = {
            autoplay: 1,
            rel: 0,
            start: getStartPosition(videoId)
        };
        $scope.$on('youtube.player.playing', function (/*$event, player*/) {
            var positionWatcher = $interval(function () {
                var position = Math.floor($scope.ytPlayer.getCurrentTime());
                if ($rootScope.profile) {
                    $rootScope.profile.history = $rootScope.profile.history || {};
                    $rootScope.profile.history[videoId] = {
                        position: position
                    };
                    console.log(videoId + ' ' + $rootScope.profile.history[videoId].position);
                    $rootScope.saveProfile($rootScope.profile);
                }
            }, 5000);
            $scope.$on("$destroy", function () {
                console.log('cancelling postion timer')
                $interval.cancel(positionWatcher);
            });
        });

        $http.jsonp('https://rr-vid-service.herokuapp.com/video/' + videoId + '?callback=JSON_CALLBACK').then(function (res) {
            var items = res.data.items;
            if (items.length > 0) {
                var item = items[0];
                $scope.video.title = item.snippet.title;
                $scope.video.views = item.statistics.viewCount;
                $scope.video.likes = item.statistics.likeCount
                $scope.video.dislikes = item.statistics.dislikeCount;
                $scope.video.likePercent = Math.round(item.statistics.likeCount / (parseInt(item.statistics.likeCount) + parseInt(item.statistics.dislikeCount)) * 100);
            }
        }, function (err) {
            //TODO how to show error messages??
        });

        var related = [];
        $http.jsonp('https://rr-vid-service.herokuapp.com/related/' + videoId + '?callback=JSON_CALLBACK').then(function (res) {
            var items = res.data.items;
            for (var i in items) {
                var item = items[i];
                related.push({
                    img: item.snippet.thumbnails.high.url,
                    id: item.id.videoId,
                    heading: item.snippet.title,
                    views: 2000,
                    duration: item.contentDetails.duration,
                    date: new Date(item.snippet.publishedAt)
                });
            }
            $scope.playlist = related;
        }, function (err) {
            //TODO how to show error messages??
        });

        function getStartPosition(vid) {
            if ($rootScope.profile && $rootScope.profile.history && $rootScope.profile.history[vid]) {
                console.log('Starting postion fetched for %s as %s', vid, $rootScope.profile.history[vid].position);
                return $rootScope.profile.history[vid].position;
            } else {
                return 0;
            }
        }
    })
;
