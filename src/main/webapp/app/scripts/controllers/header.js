FirstApp.controller('HeaderController', [ '$scope', '$location', 'FoodService', 'AllRecipesService', 'CompoundService',
		function($scope, $location, FoodService, AllRecipesService, CompoundService) {
			$scope.isActive = function(viewLocation) {
				return viewLocation === $location.path();
			};
			
			$scope.$on('$routeChangeStart', function(){
				$scope.searchField = null;
				$scope.resList = null;
			});
			
			$scope.getResult = function(searchName, searchType){
				if(searchName != '' && searchName != undefined){
					if(searchType == 'food'){
						FoodService.searchByFoodNameLike({
							name : searchName
						}, function(resp){
							$scope.resList = resp;
							$scope.href= "by_food_name";
						});
					}else if(searchType == 'foodRecipe'){
						AllRecipesService.searchRecipeByName({
							name: searchName
						}, function(resp){
							$scope.resList = resp;
							$scope.href= "foodRecipe";
						});
					}
				}else{
					$scope.resList = null;
				}
				
				
			};
		} ]);
