'use strict';

describe('vidapp.home module', function () {
    beforeEach(module('vidapp.home'));

    var $controller, $httpBackend, vidServiceRequestHandler;

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');

        // Set up the mock http service responses
        vidServiceRequestHandler = $httpBackend.when('JSONP', 'https://rr-vid-service.herokuapp.com/popular?callback=JSON_CALLBACK')
            .respond(popularSample);
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
            expect(controller).toBeDefined();
            $httpBackend.flush();
        });
        it('should set the loding flag correctly after the service call', function () {
            //spec body
            var $scope = {};
            var controller = $controller('homeCtrl', {$scope: $scope});
            expect(controller).toBeDefined();
            expect($scope.loading).toBe(true);
            $httpBackend.flush();
            expect($scope.loading).toBe(false);
        });
        it('should have a controller should set the rows object after service call', function () {
            //spec body
            var $scope = {};
            var controller = $controller('homeCtrl', {$scope: $scope});
            expect(controller).toBeDefined();
            $httpBackend.flush();
            expect($scope.loading).toBe(false);
            //TODO add more assertions
        });
    });
});

var popularSample = {
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
        },
        contentDetails: {
            duration: "2:07"
        }
    }, {
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
        },
        contentDetails: {
            duration: "2:07"
        }
    }, {
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
        },
        contentDetails: {
            duration: "2:07"
        }
    }, {
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
        },
        contentDetails: {
            duration: "2:07"
        }
    }, {
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
        },
        contentDetails: {
            duration: "2:07"
        }
    }, {
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
        },
        contentDetails: {
            duration: "2:07"
        }
    }, {
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
        },
        contentDetails: {
            duration: "2:07"
        }
    }]
};