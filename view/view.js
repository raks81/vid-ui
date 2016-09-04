'use strict'

angular.module('vidapp.view', ['ngRoute', 'youtube-embed'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view/:id+', {
            templateUrl: 'view/view.html',
            controller: 'viewCtrl'
        });
    }])
    .controller('viewCtrl', function ($scope, $rootScope, $sce, $routeParams, $http, $interval) {
        $scope.video = {
            id: $routeParams.id,
            title: 'The title of the video',
            views: 12345,
            likes: 123,
            dislikes: 2
        };

        $scope.playerVars = {
            autoplay: 1,
            rel: 0,
            start: getStartPosition($routeParams.id)
        };

        $scope.$on('youtube.player.playing', function (/*$event, player*/) {
            $interval(function () {
                var position = Math.floor($scope.ytPlayer.getCurrentTime());
                if ($rootScope.profile) {
                    $rootScope.profile.history = $rootScope.profile.history || {};
                    $rootScope.profile.history[$routeParams.id] = {
                        vid: $routeParams.id, position: position
                    };
                    $rootScope.saveProfile($rootScope.profile);
                }
            }, 5000);
        });

        var related = [];
        $http.jsonp('https://rr-vid-service.herokuapp.com/related/' + $routeParams.id + '?callback=JSON_CALLBACK').then(function (res) {
            var items = res.data.items;
            for (var i in items) {
                var item = items[i];
                related.push({
                    img: item.snippet.thumbnails.high.url,
                    id: item.id.videoId,
                    heading: item.snippet.title,
                    views: 2000,
                    date: new Date(item.snippet.publishedAt)
                });
            }
            $scope.playlist = related;
        }, function (err) {
            //TODO how to show error messages??
        });

        function getStartPosition(vid) {
            if ($rootScope.profile && $rootScope.profile.history && $rootScope.profile.history[vid]) {
                return $rootScope.profile.history[vid].position;
            } else {
                return 0;
            }
        }
    })
;
