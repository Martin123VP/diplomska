FirstApp.factory('FoodCompoundService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/compounds_foods', {}, {
		findByFoodName: {
		      method: 'GET',
		      url: "/data/rest/compounds_foods/by_food_name/:name",
		      isArray: true
		},
		findFoodByCompoundName: {
			  method: 'GET',
		      url: "/data/rest/compounds_foods/by_compound_name/:name",
		      isArray: true
		}
		    
	});
}]);