'use strict'

angular.module('vidapp', ['vidapp.home', 'vidapp.view', 'ngRoute', 'ngMaterial', 'ngMessages'])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    })
    .run(function ($rootScope, $mdDialog) {
        //TODO better way of doing this??
        $rootScope.siteName = 'The Video Site';
        $rootScope.copyright = 'Copyright 2016 Videos Online Inc.';
        $rootScope.navItems = [{href: '#/home', title: 'Home'}];

        $rootScope.signin = {};

        $rootScope.saveProfile = function (profile) {
            localStorage['profile'] = profile ? JSON.stringify(profile) : "{}";
        };

        $rootScope.getProfile = function getProfile() {
            return localStorage['profile'] ? JSON.parse(localStorage['profile']) : null;
        };

        $rootScope.clearProfile = function clearProfile() {
            localStorage['profile'] = null;
        };

        $rootScope.profile = $rootScope.getProfile();

        $rootScope.showSigninDialog = function (ev) {
            $rootScope.signin.name = $rootScope.profile ? $rootScope.profile.name : null;
            $rootScope.signin.email = $rootScope.profile ? $rootScope.profile.email : null;

            $mdDialog.show({
                contentElement: '#signupDialog',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $rootScope.signIn = function () {
            $rootScope.profile = $rootScope.getProfile() || {};
            $rootScope.profile.name = $rootScope.signin.name;
            $rootScope.profile.email = $rootScope.signin.email;
            $rootScope.saveProfile($rootScope.profile);
            $mdDialog.hide({
                contentElement: '#signupDialog'
            });
        };

        $rootScope.signOut = function () {
            $rootScope.profile = null;
            $rootScope.clearProfile();
            $mdDialog.hide({
                contentElement: '#signupDialog'
            });
        }
    });