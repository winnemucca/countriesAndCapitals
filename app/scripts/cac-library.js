angular.module('cacLibrary',[])
	.constant('CAC_API_PREFIX','http://api.geonames.org')
	.constant('CAC_API_SUFFIX', 'username=skauyedauty')
	.constant('CAC_COUNTRY_INFO_PATH', '/countryInfoJSON?')

	.constant('CAC_NEIGHBORS', '/neighboursJSON?country={{ countryCode }}')
	.constant('CAC_SEARCH', '/searchJSON?country={{ countryCode }}&featureCode=PPLC')

	.factory('cacCountries',['$http', '$q', 'CAC_API_PREFIX', 'CAC_API_SUFFIX', 'CAC_COUNTRY_INFO_PATH', function($http, $q, CAC_API_PREFIX, CAC_API_SUFFIX, CAC_COUNTRY_INFO_PATH) {
		return function() {
			var defer = $q.defer();
			$http.get(CAC_API_PREFIX+CAC_COUNTRY_INFO_PATH+CAC_API_SUFFIX, {
				cache: true })
			.success(function(countries) {
		 		defer.resolve(countries.geonames);
			});
			return defer.promise;
		}
	}])

	.factory('cacFindCountry',['cacRequest','$interpolate', '$q','CAC_search', function(cacRequest, $interpolate, $q,CAC_search) {
			return function(q) {
			var path; 
			path = $interpolate(CAC_SEARCH)({
				countryCode : q
			});
          console.log(cacRequest.getData(path));
			return cacRequest.getData(path);
		}

	}])

	
  .factory('cacRequest', ['$http', '$q', 'CAC_API_PREFIX', 'CAC_API_SUFFIX', 
                  function($http,   $q,   CAC_API_PREFIX, CAC_API_SUFFIX) {
    return {
      getData: function(path) {
        var defer = $q.defer();
        $http.get(CAC_API_PREFIX + path + '&' + CAC_API_SUFFIX)
          .success(function(data) {
            defer.resolve(data.geonames);
          })
          console.log('promise',defer.promise)
        return defer.promise;
      }
    };
  }])

  .factory('cacFindCountry', ['cacRequest', '$interpolate', 'CAC_SEARCH', function(cacRequest,   $interpolate,   CAC_SEARCH ) {
    return function(q) {
      var path;
      path = $interpolate(CAC_SEARCH)({
        countryCode : q
      });
      // console.log('promises',cacRequest.getData(path));
      return cacRequest.getData(path);
    }
  }])

 .factory('cacFindNeighbors',    ['cacRequest', '$interpolate', 'CAC_NEIGHBORS', function(cacRequest, $interpolate,   CAC_NEIGHBORS ) {
    return function(q) {
      console.log(q);
      var path;
      path = $interpolate(CAC_NEIGHBORS)({
        countryCode : q
      });
      console.log('neighbors', cacRequest.getData(path))
      return cacRequest.getData(path);
    }
  }])
