FirstApp
		.controller(
				'allFoodRecipesController',
				[
						'$scope',
						'crudService',
						'$routeParams',
						'toaster',
						'settings',
						'ngTableParams',
						'$filter',
						'$modal',
						'$http',
						function($scope, crudService, $routeParams, toaster,
								settings, ngTableParams, $filter, $modal, $http) {
						
	$scope.totalData = 20;
	  var service = crudService('all_recipes');
	  
	  service.query(function(data){
		  $scope.allFoodsRecipes = data;
	  });
		$scope.loadMore = function(){
			if($scope.totalData < $scope.allFoodsRecipes.length) {
				$scope.totalData += 5;
			}
		}
							
}]);