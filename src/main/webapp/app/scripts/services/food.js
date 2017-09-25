/*
 * Generic CRUD resource REST service
 */
FirstApp.factory('FoodService', ['$resource', 'settings', function($resource, settings) {

  return $resource('/data/rest/foods/:id', {}, {
    findByName: {
      method: 'GET',
      url: "/data/rest/foods/by_food_name/:name",
      isArray: true
    },
    findByGroup: {
    	method: 'GET',
    	url: "/data/rest/foods/by_food_group/:name",
    	isArray: true
    },
    findBySubgroup: {
    	method: 'GET',
    	url: "/data/rest/foods/by_food_subgroup/:name",
    	isArray: true
    },
    findByFoodNameLike: {
    	method: 'GET',
    	url: "/data/rest/foods/by_food_name_like/:name"
    },
    searchByFoodNameLike: {
    	method: 'GET',
    	url: 'data/rest/foods/search_by_food_name/:name',
    	isArray: true
    }
    
  });

}]);
