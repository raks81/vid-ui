'use strict'

angular.module('vidapp.view', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view/:id+', {
            templateUrl: 'view/view.html',
            controller: 'viewCtrl'
        });
    }])
    .controller('viewCtrl', function ($scope, $sce, $routeParams, $http) {
        $scope.video = {
            url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $routeParams.id + '?autoplay=1&rel=0'),
            title: 'The title of the video',
            views: 12345,
            likes: 123,
            dislikes: 2
        };
        $scope.loading = true;
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
            $scope.loading = false;
            $scope.playlist = related;
        }, function (err) {
            //TODO how to show error messages??
        });
    })
;