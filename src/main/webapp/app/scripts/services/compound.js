FirstApp.factory('CompoundService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/compounds', {}, {
		findByName: {
		      method: 'GET',
		      url: "/data/rest/compounds/by_compound_name/:name",
		      isArray: true
		},
		searchByCompoundName: {
			method: 'GET',
			url: "/data/rest/compounds/search_by_compound_name/:name",
			isArray: true
		}
		  
	});
}]);