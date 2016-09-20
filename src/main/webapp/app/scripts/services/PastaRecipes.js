FirstApp.factory('PastaRecipesService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/pasta_recipes', {}, {
		findByName: {
		      method: 'GET',
		      url: "/data/rest/pasta_recipes/by_recipe_name/:name"
		    }
	});
}]);