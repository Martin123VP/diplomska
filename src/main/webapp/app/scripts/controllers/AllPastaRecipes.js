FirstApp
		.controller(
				'allPastaRecipesController',
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
	
	var service = crudService('pasta_recipes');
	  
	  service.query(function(data){
		  $scope.allPastaRecipes = data;
	  });


$scope.loadMore = function(){
	debugger;
	if($scope.totalData < $scope.allPastaRecipes.length) {
		$scope.totalData += 5;
	}
}
							
}]);