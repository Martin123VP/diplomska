FirstApp
		.controller(
				'dessertRecipeController',
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
						'DessertRecipesService',
						function($scope, crudService, $routeParams, toaster,
								settings, ngTableParams, $filter, $modal, $http, DessertRecipesService) {
							
							
					var name = $routeParams.name;
					
					$scope.foodRecipe = DessertRecipesService.findByName({
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
					
				   
					/*$scope.recipeName = $routeParams.recipe;
					
					var rawRecipe = $scope.recipeName;
					
					rawRecipe = rawRecipe.replace(/\s+/g, '_');
					
					rawRecipe = rawRecipe.replace(/\(/, '%28');
					rawRecipe = rawRecipe.replace(/\)/, '%29');
					var recipe = "dbr%3A" + rawRecipe;
					
    var resource = "http://dbpedia.org/sparql/?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+%3Fabstract%2C+%3Fthumbnail+%7B%0D%0A++"+ recipe +"+dbo%3Aabstract+%3Fabstract%3B%0D%0A++++++++++++dbo%3Athumbnail+%3Fthumbnail+.%0D%0A++filter%28lang%28%3Fabstract%29+%3D+%27en%27%29%0D%0A%7D&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on";
	    $http.get(resource).then(function(data){
	    	$scope.foodRecipe = data.data.results.bindings;
		});

    var complexRecipe = "<http%3A%2F%2Fdbpedia.org%2Fresource%2F" + rawRecipe + ">";
    
    if(!$scope.foodRecipe){
    	resource = "http://dbpedia.org/sparql/?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+%3Fabstract%2C+%3Fthumbnail+%7B%0D%0A++"+ complexRecipe +"+dbo%3Aabstract+%3Fabstract%3B%0D%0A++++++++++++dbo%3Athumbnail+%3Fthumbnail+.%0D%0A++filter%28lang%28%3Fabstract%29+%3D+%27en%27%29%0D%0A%7D&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on";
    	$http.get(resource).then(function(data){
	    	$scope.foodRecipe = data.data.results.bindings;
		});
    }
    
    
    
    var resourceServingTemperature = "http://dbpedia.org/sparql/?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+%3FservingTemperature+where+%7B%0D%0A++++"+ recipe +"+dbo%3AservingTemperature+%3FservingTemperature+++%0D%0A%7D%0D%0A&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on";
    $http.get(resourceServingTemperature).then(function(data){
    	$scope.foodRecipeServingTemperature = data.data.results.bindings;
    });
    
    if(!$scope.foodRecipeServingTemperature){
    	resourceServingTemperature = "http://dbpedia.org/sparql/?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+%3FservingTemperature+where+%7B%0D%0A++++"+ complexRecipe +"+dbo%3AservingTemperature+%3FservingTemperature+++%0D%0A%7D%0D%0A&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on";
        $http.get(resourceServingTemperature).then(function(data){
        	$scope.foodRecipeServingTemperature = data.data.results.bindings;
        });
    }
    
	
	var recourceIngredients = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+%3Fingredients%7B%0D%0A++"+ recipe +"+dbo%3AingredientName+%3Fingredients%0D%0A%7D&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on";
    $http.get(recourceIngredients).then(function(data){
    	$scope.foodRecipeIngredients = data.data.results.bindings[0];
    })
    
    if(!$scope.foodRecipeIngredients) {
    	recourceIngredients = "http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select+distinct+%3Fingredients%7B%0D%0A++"+ complexRecipe +"+dbo%3AingredientName+%3Fingredients%0D%0A%7D&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on";
        $http.get(recourceIngredients).then(function(data){
        	$scope.foodRecipeIngredients = data.data.results.bindings[0];
        })
    }*/
							
							
							
}]);