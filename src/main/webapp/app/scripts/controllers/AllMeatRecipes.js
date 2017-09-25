FirstApp
		.controller(
				'allMeatRecipesController',
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
	window.scrollTo(0,0);
	 var service = crudService('meat_recipes');
	  
	  service.query(function(data){
		  $scope.allMeatRecipes = data;
	  });
	  
	  
$scope.loadMore = function(){
	if($scope.totalData < $scope.allMeatRecipes.length) {
		$scope.totalData += 10;
	}
}
							
}]);