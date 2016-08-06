FirstApp.controller(
		'FoodSubgroupController', 
		[ 
		  	'$scope',
		  	'$routeParams',
		  	'FoodService',
		  	function($scope, $routeParams, FoodService) {
		  		
		  		
		  		window.scope = $scope;
		  		
		  		$scope.name = $routeParams.name;
		  		$scope.foodSubgroups = FoodService.findBySubgroup({
		  			name: $routeParams.name
		  		});
		  		
		}]);