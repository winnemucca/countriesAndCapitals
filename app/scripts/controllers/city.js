viewsModule.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/countries/:countryCode",{
		templateUrl : "./views/city.html",
    	controller : 'CityCtrl',
    	resolve: {
    		cityDetails:['cacFindCountry','$route',function(cacFindCountry,$route){
    			var countryCode = $route.current.params.countryCode;
    			return cacFindCountry(countryCode);
    		}],
    		countryNeighbors : ['cacFindNeighbors','$route', function(cacFindNeighbors,$route) {
    			return cacFindNeighbors;
    		}],
    		countryDetails : ['$rootScope', '$route', function($rootScope, $route) {
        // 		var countryIndex = arrayObjectIndexOf($rootScope.countries, $route.current.params.countryCode);
        // return $rootScope.countries[countryIndex];
      		}]
    	}
	});
}]);

viewsModule.controller('CityCtrl', [ 'countryNeighbors', 'countryDetails', 'cityDetails', '$scope',function( countryNeighbors,countryDetails,$scope,cityDetails ) {
	console.log('cities');
   }]);

