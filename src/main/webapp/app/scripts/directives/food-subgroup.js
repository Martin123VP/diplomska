FirstApp.directive(
		'foodSubgroup', 
			['crudService', 
			 function(crudService){
				return {
					restrict: 'AE',
					scope: {
						entity: '='
					},
					templateUrl: 'directives/food-subgroup.html'
				};
				
}]);