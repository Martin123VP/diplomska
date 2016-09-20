FirstApp.controller(
		'NutrientController', 
		[ 
		  	'$scope',
		  	'$routeParams',
		  	'CompoundHealthEffectService',
		  	'CompoundService',
		  	function($scope, $routeParams, CompoundService, CompoundHealthEffectService) {
		  		
		  		var service 

		  		$scope.name = $routeParams.name;
		  		
		  		window.scope = $scope;
		  		
		  		CompoundHealthEffectService.findByHealthEffectName({
		  			name: $routeParams.name
		  		}, function(resp){
		  			debugger;
		  		});
		  		
		  	
		  	
		}]);