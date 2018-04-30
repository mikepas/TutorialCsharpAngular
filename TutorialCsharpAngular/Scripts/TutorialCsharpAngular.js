var TutorialCsharpAngular = angular.module('TutorialCsharpAngular', ['ngRoute']);

TutorialCsharpAngular.controller('LandingPageController', LandingPageController);
TutorialCsharpAngular.controller('LoginController', LoginController);
TutorialCsharpAngular.controller('RegisterController', RegisterController);

TutorialCsharpAngular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
TutorialCsharpAngular.factory('LoginFactory', LoginFactory);
TutorialCsharpAngular.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

TutorialCsharpAngular.config(configFunction);