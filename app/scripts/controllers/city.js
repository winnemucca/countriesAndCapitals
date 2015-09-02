viewsModule.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/countries/:countryCode",{
		templateUrl : "./views/city.html",
    	controller : 'CityCtrl',
    	resolve: {
    		cityDetails:['cacFindCountry','$route', function(cacFindCountry,$route){
    			var countryCode = $route.current.params.countryCode;
    			return cacFindCountry(countryCode);
    		}],
    		countryNeighbors : ['cacFindNeighbors','$route', function(cacFindNeighbors,$route) {
                var countryCode = $route.current.params.countryCode;
                console.log(countryCode);
                // pushes country code into neighbors
    			return cacFindNeighbors(countryCode);
    		}],
    		countryDetails : ['cacCountries', '$route', function(cacCountries, $route) {
                console.log(cacCountries);
                return cacCountries;
      		}]
    	}
	});
}]);



viewsModule.controller('CityCtrl', ['countryNeighbors', 'countryDetails', 'cityDetails', 'cacRequest', '$scope', function(countryNeighbors, countryDetails, cityDetails, cacRequest, $scope){

    $scope.city = cityDetails[0].countryName;

    $scope.population = cityDetails[0].population;

    $scope.capital = cityDetails[0].name

    $scope.neighbors = countryNeighbors[0].countryName + ' & ' + countryNeighbors[1].countryName;
   


}]);
