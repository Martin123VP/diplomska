FirstApp
		.controller(
				'saladRecipeController',
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
						'SaladRecipesService',
						function($scope, crudService, $routeParams, toaster,
								settings, ngTableParams, $filter, $modal, $http, SaladRecipesService) {
							
							
					var name = $routeParams.name;
					
					$scope.foodRecipe = SaladRecipesService.findByName({
						name: name
					}, function(data){
						if(data){
							$scope.parts = data.ingredientName.split(',');
							$scope.searchIngredient = [];
							$scope.ingredinetsName = [];
						    for(var i=0;i<$scope.parts.length; i++){
						    	if($scope.parts[i].endsWith("es")){
						    		$scope.searchIngredient.push($scope.parts[i].slice(0,$scope.parts[i].length-2));
						    	}else if($scope.parts[i].endsWith("s")){
						    		$scope.searchIngredinet.push($scope.parts[i].slice(0,$scope.parts[i].length-1));
						    	}
						    	else if($scope.parts[i].indexOf(" ") >= 0){
						    		var str = $scope.parts[i].split(" ");
						    		$scope.searchIngredient.push(str[1]);
						    	}
						    	else{
						    		$scope.searchIngredient.push($scope.parts[i]);
						    	}
						    	
						    	$scope.ingredinetsName.push($scope.parts[i]);
						    }
						}
					});
					
							
}]);