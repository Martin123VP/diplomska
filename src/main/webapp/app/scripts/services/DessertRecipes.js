FirstApp.factory('DessertRecipesService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/dessert_recipes', {}, {
		findByName: {
		      method: 'GET',
		      url: "/data/rest/all_recipes/by_recipe_name/:name"
		    }
	});
}]);