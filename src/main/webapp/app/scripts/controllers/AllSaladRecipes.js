FirstApp
		.controller(
				'allSaladRecipesController',
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
	
	var service = crudService('salad_recipes');
	  
	  service.query(function(data){
		  $scope.allSaladRecipes = data;
	  });


$scope.loadMore = function(){
	debugger;
	if($scope.totalData < $scope.allSaladRecipes.length) {
		$scope.totalData += 5;
	}
}
							
}]);