FirstApp.directive(
		'foodGroups', 
			['crudService', 
			 function(crudService){
				return {
					restrict: 'AE',
					scope: {
						entity: '='
					},
					templateUrl: 'directives/food-group.html'
				};
				
}]);