FirstApp.factory('SaladRecipesService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/salad_recipes', {}, {
		findByName: {
		      method: 'GET',
		      url: "/data/rest/salad_recipes/by_recipe_name/:name"
		    }
	});
}]);