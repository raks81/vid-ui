'use strict'

angular.module('vidapp.view', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view/:id+', {
            templateUrl: 'view/view.html',
            controller: 'viewCtrl'
        });
    }])
    .controller('viewCtrl', function ($scope, $sce, $routeParams) {
        $scope.video = {
            url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $routeParams.id),
            title: 'The title of the video',
            views: 12345,
            likes: 123,
            dislikes: 2
        };
        $scope.playlist = [{
            img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: 'J3smwlrSiWY'
        }, {
            img: 'http://img.youtube.com/vi/_dCM_gWmsFM/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: '_dCM_gWmsFM'
        }, {
            img: 'http://img.youtube.com/vi/6XUf6FOS0xc/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: '6XUf6FOS0xc'
        }, {
            img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: '6XUf6FOS0xc'
        }, {
            img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: '6XUf6FOS0xc'
        }, {
            img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: '6XUf6FOS0xc'
        }, {
            img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: '6XUf6FOS0xc'
        }, {
            img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
            heading: ' Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD ',
            views: 123456,
            date: '20 Aug 2016', id: '6XUf6FOS0xc'
        },];
    });