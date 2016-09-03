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
        $http.jsonp('http://localhost:8080/playlist/PLzufeTFnhupy7sSmQdH5s3nUH8rwsua-U?callback=JSON_CALLBACK').then(function (res) {
            var items = res.data.items;
            for (var i in items) {
                var item = items[i];
                console.log(JSON.stringify(item));
                row.posts.push({
                    img: item.snippet.thumbnails.high.url,
                    id: item.snippet.resourceId.videoId,
                    heading: item.snippet.title,
                    views: 2000,
                    date: new Date(item.snippet.publishedAt)
                });
            }
            $scope.loading = false;
            $scope.rows = rows;
        }, function (err) {
            //TODO how to show error messages??
        })
    });