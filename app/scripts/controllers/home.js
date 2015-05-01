viewsModule.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "./views/home.html",
		controller : 'HomeCtrl'
	});
}])

viewsModule.controller('HomeCtrl', ['$scope',function($scope) {
	console.log('home');
}]);