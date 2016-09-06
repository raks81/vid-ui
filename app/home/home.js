'use strict'

angular.module('vidapp.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        });
    }])
    .controller('homeCtrl', function ($scope, $http) {
        $scope.loading = true;
        var rows = [];
        var row = {};
        row.posts = [];
        rows.push(row);
        $http.jsonp('https://rr-vid-service.herokuapp.com/popular?callback=JSON_CALLBACK').then(function (res) {
            var items = res.data.items;
            var colCount = 0;
            for (var i in items) {
                var item = items[i];
                row.posts.push({
                    img: item.snippet.thumbnails.high.url,
                    id: item.id,
                    heading: item.snippet.title,
                    views: item.statistics.viewCount,
                    date: new Date(item.snippet.publishedAt),
                    duration: item.contentDetails.duration
                });
                if (++colCount == 5) {
                    colCount = 0;
                    row = {};
                    row.posts = [];
                    rows.push(row);
                }
            }
            $scope.loading = false;
            $scope.rows = rows;
        }, function (err) {
            //TODO how to show error messages??
        })
    });