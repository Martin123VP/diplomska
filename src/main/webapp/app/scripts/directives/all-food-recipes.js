FirstApp.directive(
		'AllFoodRecipes', 
			['crudService', 
			 function(crudService){
				return {
					restrict: 'AE',
					scope: {
						entity: '='
					},
					templateUrl: 'directives/all-food-recipes.html'
				};
				
}]);