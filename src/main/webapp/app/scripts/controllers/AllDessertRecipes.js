FirstApp
		.controller(
				'allDessertRecipesController',
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
	 var service = crudService('dessert_recipes');
	  
	  service.query(function(data){
		  $scope.allDessertRecipes = data;
	  });


$scope.loadMore = function(){
	debugger;
	if($scope.totalData < $scope.allDessertRecipes.length) {
		$scope.totalData += 5;
	}
}
							
}]);