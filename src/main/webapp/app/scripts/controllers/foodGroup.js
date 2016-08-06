FirstApp.controller(
		'FoodGroupController', 
		[ 
		  	'$scope',
		  	'$routeParams',
		  	'FoodService',
		  	function($scope, $routeParams, FoodService) {
		  		
		  		
		  		window.scope = $scope;
		  		
		  		$scope.name = $routeParams.name;
		  		
		  		FoodService.findByGroup({
		  			name: $routeParams.name
		  		}, function(data){
		  			$scope.foodGroups = data;
		  		});
		  		
		}]);