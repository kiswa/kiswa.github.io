var myApp = angular.module('GitHubPages', ['ngRoute']);

myApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
