'use strict';

describe('vidapp.view module', function () {
    beforeEach(module('vidapp.view'));

    var $controller, $httpBackend, $rootScope;

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');
        $rootScope = $injector.get('$rootScope');

        // Set up the mock http service responses
        $httpBackend.when('JSONP', 'https://rr-vid-service.herokuapp.com/related/AbC?callback=JSON_CALLBACK')
            .respond(relatedSample);
        $httpBackend.when('JSONP', 'https://rr-vid-service.herokuapp.com/video/AbC?callback=JSON_CALLBACK')
            .respond(videoSample);

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('view page controller', function () {

        it('should retrieve video information and related videos', function () {
            var $scope, controller;
            $scope = $rootScope.$new();
            controller = $controller('viewCtrl', {$scope: $scope, $routeParams: {id: 'AbC'}});
            expect(controller).toBeDefined();
            $httpBackend.flush();
            expect($scope.playlist).not.toBeUndefined();
            expect($scope.video).not.toBeUndefined();
            //TODO add more assertions
        });

        it('should set player args when a profile is set', function () {
            var $scope, controller;
            $scope = $rootScope.$new();
            controller = $controller('viewCtrl', {$scope: $scope, $routeParams: {id: 'AbC'}});
            expect(controller).toBeDefined();
            $httpBackend.flush();
            expect($scope.playerVars).not.toBeUndefined();
            expect($scope.playerVars).toEqual({
                autoplay: 1,
                rel: 0,
                start: 0
            });
        });

        it('should set player args and saved position when a profile is set', function () {
            $rootScope.profile = sampleProfile;
            var $scope, controller;
            $scope = $rootScope.$new();
            controller = $controller('viewCtrl', {$scope: $scope, $routeParams: {id: 'AbC'}});
            expect(controller).toBeDefined();
            $httpBackend.flush();
            expect($scope.playerVars).not.toBeUndefined();
            expect($scope.playerVars).toEqual({
                autoplay: 1,
                rel: 0,
                start: 14
            });
        });
    });
});

var relatedSample = {
    "items": [
        {
            "id": "AbC",
            "snippet": {
                "publishedAt": "2016-09-02T21:02:51.000Z",
                "title": "Title of video",
                "thumbnails": {
                    "high": {
                        "url": "https://i.ytimg.com/vi/ymveLawN-RM/hqdefault.jpg"
                    }
                }
            },
            "statistics": {
                "viewCount": "358504",
                "likeCount": "1388",
                "dislikeCount": "106"
            }
        }
    ]
};

var videoSample = {
    "items": [
        {
            "id": "AbD",
            "snippet": {
                "publishedAt": "2016-09-02T21:02:51.000Z",
                "title": "Title of related video",
                "thumbnails": {
                    "high": {
                        "url": "https://i.ytimg.com/vi/ymveLawN-RM/hqdefault.jpg"
                    }
                }
            },
            "statistics": {
                "viewCount": "358504",
                "likeCount": "1388",
                "dislikeCount": "106"
            }
        }
    ]
};

var sampleProfile = {
    name: 'Test User',
    email: 'test@test.com',
    history: {
        'AbC': {
            position: 14
        }
    }
};