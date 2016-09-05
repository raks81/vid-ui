'use strict';

describe('vidapp.home module', function () {
    beforeEach(module('vidapp.home'));

    var $controller, $httpBackend, vidServiceRequestHandler;
    beforeEach(inject(function (_$controller_, _$httpBackend_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');

        vidServiceRequestHandler = $httpBackend.when('JSONP', 'https://rr-vid-service.herokuapp.com/popular?callback=JSON_CALLBACK')
            .respond({
                items: [{
                    id: "AbC", "snippet": {
                        title: "Some title", thumbnails: {
                            high: {
                                "url": "https://i.ytimg.com/vi/PeonBmeFR8o/hqdefault.jpg"
                            }
                        }
                    },
                    statistics: {
                        viewCount: "1898917",
                        likeCount: "181125",
                        dislikeCount: "5535"
                    }
                }]
            });
    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('home page controller', function () {
        it('should have a controller called homeCtrl', function () {
            //spec body
            var $scope = {};
            var controller = $controller('homeCtrl', {$scope: $scope});
            $httpBackend.flush();
            expect(controller).toBeDefined();
            expect($scope.rows).not.toBeUndefined();
        });
    });
});