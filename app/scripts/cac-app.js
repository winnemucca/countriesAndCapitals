angular.module('cacApp', ['cacAppViews', 'ngRoute', 'ui.bootstrap'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo : '/home'
    });
  }])