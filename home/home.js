'use strict'

angular.module('vidapp.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        });
    }])
    .controller('homeCtrl', function ($scope) {
        var rows = [{
            heading: 'Row Heading',
            posts: [{
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016',  id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }]
        }, {
            heading: 'Row Heading',
            posts: [{
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }]
        }, {
            heading: 'Row Heading',
            posts: [{
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }]
        }, {
            heading: 'Row Heading',
            posts: [{
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }]
        },{
            heading: 'Row Heading',
            posts: [{
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }, {
                img: 'http://img.youtube.com/vi/J3smwlrSiWY/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68',
                heading: 'Nachde Ne Saare - Baar Baar Dekho | Sidharth M & Katrina K | Jasleen R | Harshdeep K, Siddharth MD',
                views: 123456,
                date: '20 Aug 2016', id: '_dCM_gWmsFM'
            }]
        }];
        $scope.rows = rows;
    });