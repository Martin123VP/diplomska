FirstApp.factory('AllRecipesService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/all_recipes', {}, {
		findByName: {
		      method: 'GET',
		      url: "/data/rest/all_recipes/by_recipe_name/:name"
		    },
		    
	    findRecipesByIngredientName: {
	    	method: 'GET',
	    	url: 'data/rest/all_recipes/by_recipe_ingredient_name/:name',
	    	isArray: true
	    },
	    searchRecipeByName: {
	    	method: 'GET',
	    	url: 'data/rest/all_recipes/search_by_recipe_name/:name',
	    	isArray: true
	    }
	});
}]);