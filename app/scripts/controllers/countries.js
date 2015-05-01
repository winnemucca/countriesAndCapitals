viewsModule.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/countries",{
		templateUrl: "./views/countries.html",
		controller : "CountryCtrl"
	});
}]);



viewsModule.controller('CountryCtrl', ['$scope', 'cacCountries', function($scope, cacCountries) {
	$scope.loading = true;
	cacCountries().then(function(countries) {
		// console.log(countries);
		$scope.countries = countries;
		$scope.loading = false;
	});

}]);