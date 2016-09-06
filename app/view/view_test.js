'use strict';

describe('vidapp.view module', function () {
    beforeEach(module('vidapp.view'));

    var $controller, $httpBackend, $rootScope, $interval;

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');
        $rootScope = $injector.get('$rootScope');
        $interval = $injector.get('$interval');

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

        it('should save the current position of the video being played ', function () {
            $rootScope.profile = sampleProfile;
            var $scope, controller;
            spyOn($rootScope, '$broadcast').and.callThrough();
            spyOn($interval, 'cancel').and.callThrough();

            $rootScope.saveProfile = jasmine.createSpy("saveProfile spy");

            $scope = $rootScope.$new();
            controller = $controller('viewCtrl', {$scope: $scope, $routeParams: {id: 'AbC'}, $interval: $interval});
            expect(controller).toBeDefined();
            $httpBackend.flush();

            //Setup YT player
            $scope.ytPlayer = {
                getCurrentTime: function () {
                    return 5;
                }
            };
            // Simulate player has started
            $rootScope.$broadcast('youtube.player.playing', [{event: {}, player: {}}]);

            //Simulate 5s has passed since video started
            $interval.flush(5000);
            expect($rootScope.saveProfile).toHaveBeenCalled();

            // Simulate navigation away from page
            $rootScope.$broadcast('$destroy', []);

            expect($interval.cancel).toHaveBeenCalled();

            expect($rootScope.profile.history.AbC.position).toEqual(5);
            // TODO add more expectations
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
            },
            "contentDetails": {
                "duration":"1:06"
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