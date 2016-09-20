FirstApp.factory('MeatRecipesService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/meat_recipes', {}, {
		findByName: {
		      method: 'GET',
		      url: "/data/rest/meat_recipes/by_recipe_name/:name"
		    }
	});
}]);