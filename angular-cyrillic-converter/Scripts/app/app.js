
var MyApp = angular.module('MyApp', [
    'ngRoute',
    'ngTouch',
    'ui.router',
    'MyApp.directives',
    'MyApp.controllers'
]);

angular.module('MyApp.directives', []);
angular.module('MyApp.controllers', []);

MyApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'homeController', });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }
]);