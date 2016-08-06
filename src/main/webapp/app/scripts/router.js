/**
 * @ngdoc here we are configuring the module exposed through the FirstApp
 *        variable. The method receives an array that has a function as a last
 *        argument. Here, the angular inject the dependencies defined as strings
 *        in the array to the corresponding elements in the function. <br/> The
 *        $routeProvider is used to configure the routes. It maps templateUrl
 *        and optionally a controller to a given path. This is used by the
 *        ng-view directive. It replaces the content of the defining element
 *        with the content of the templateUrl, and connects it to the controller
 *        through the $scope.
 * @see https://docs.angularjs.org/guide/di
 */
FirstApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
	});

	$routeProvider.when('/admin/types', {
		templateUrl : 'views/edit_types.html',
		controller : 'TypeController'
	});
	
	$routeProvider.when('/allFoods', {
		templateUrl : 'views/allFoods.html',
		controller : 'allFoodsController'
	});
	
	$routeProvider.when('/allCompounds', {
		templateUrl : 'views/allCompounds.html',
		controller : 'allCompoundsController'
	});
	
	$routeProvider.when('/allFoodRecipes', {
		templateUrl: 'views/allFoodRecipes.html',
		controller: 'allFoodRecipesController'
	});
	
	$routeProvider.when('/foodRecipe/:name', {
		templateUrl: 'views/foodRecipe.html',
		controller: 'foodRecipeController'
	});
	
	$routeProvider.when('/allMeatRecipes', {
		templateUrl: 'views/allMeatRecipes.html',
		controller: 'allMeatRecipesController'
	});
	
	$routeProvider.when('/allDessertRecipes', {
		templateUrl: 'views/allDessertRecipes.html',
		controller: 'allDessertRecipesController'
	});

	$routeProvider.when('/allNutrients', {
		templateUrl : 'views/allNutrients.html',
		controller : 'allNutrientsController'
	});
	
	$routeProvider.when('/upload', {
    	templateUrl: 'views/test.html',
    	controller: 'TestController'
    });
	
	$routeProvider.when('/by_food_name/:name', {
		templateUrl: 'views/food.html',
		controller: 'FoodController'
	});
	
	$routeProvider.when('/by_food_group/:name', {
		templateUrl: 'views/foodGroup.html',
		controller: 'FoodGroupController'
	});
	
	$routeProvider.when('/by_food_subgroup/:name', {
		templateUrl: 'views/foodSubgroup.html',
		controller: 'FoodSubgroupController'
	});
	
	$routeProvider.when('/by_compound_name/:name', {
		templateUrl: 'views/compound.html',
		controller: 'CompoundController'
	});
	
	//POST
	$routeProvider.when('/profile', {
    	templateUrl: 'views/user-details.html',
    	controller: 'userController'
    });
	$routeProvider.when('/register', {
    	templateUrl: 'views/user_registration.html',
    	controller: 'RegisterUserController'
    });
	
	$routeProvider.when('/insert', {
    	templateUrl: 'views/insertIntoDB.html',
    	controller: 'insertIntoDBController'
    });
	
	$routeProvider.when('/allMeatRecipes', {
    	templateUrl: 'views/allMeatRecipes.html',
    	controller: 'allMeatRecipesController'
    });
	
	$routeProvider.when('/allSaladRecipes', {
    	templateUrl: 'views/allSaladRecipes.html',
    	controller: 'allSaladRecipesController'
    });
	
	$routeProvider.when('/allPastaRecipes', {
    	templateUrl: 'views/allPastaRecipes.html',
    	controller: 'allPastaRecipesController'
    });
	
	$routeProvider.when('/allDessertRecipes', {
    	templateUrl: 'views/allDessertRecipes.html',
    	controller: 'allDessertRecipesController'
    });
	
	//GET
	/*$routeProvider.when('/profile/:username', {
    	templateUrl: 'views/user-details.html',
    	controller: 'userController'
    });*/

	$routeProvider.when('/sellers', {
		templateUrl : 'views/display_sellers.html',
		controller : 'DisplaySellersController'
	});

	$routeProvider.when('/sellers/:id', {
		templateUrl : 'views/seller-details.html',
		controller : 'DetailSellerController'
	});

	$routeProvider.when('/stalls', {
    		templateUrl : 'views/display_stalls.html',
    		controller : 'DisplayStallsController'
    	});

	$routeProvider.when('/stalls/:id', {
		templateUrl : 'views/stall-details.html',
		controller : 'DetailStallController'
	});

	$routeProvider.when('/test', {
		templateUrl : 'views/test.html'
	});

	$routeProvider.when('/admin/categories', {
		templateUrl : 'views/edit_categories.html',
		controller : 'CategoryController'
	});

	$routeProvider.when('/admin/sellers', {
        templateUrl : 'views/edit_sellers.html',
        controller : 'EditSellersController'
    });

	// pateka za listanje na site tezgi
	$routeProvider.when('/admin/stalls', {
		templateUrl : 'views/edit_stalls.html',
		controller : 'EditStallsController'
	});

	$routeProvider.when('/products/:id?', {
		templateUrl : 'views/product.html',
		controller : 'ProductController'
	});

	$routeProvider.when('/browse_category/:id', {
		templateUrl : 'views/browse_category.html',
		controller : 'BrowseCategoryController'
	});

	$routeProvider.when('/browse_stall/:id', {
		templateUrl : 'views/browse_stall.html',
		controller : 'BrowseStallController'
	});

	// Browse product by type
	$routeProvider.when('/browse_type/:id', {
		templateUrl : 'views/browse_type.html',
		controller : 'BrowseTypeController'
	});

	$routeProvider.when('/product/details/:id', {
		templateUrl : 'views/product-details.html',
		controller : 'ProductDetailsController'
	});

	$routeProvider.when('/login', {
		templateUrl : 'views/login.html',
		controller : 'LoginController'
	});

	$routeProvider.when('/books/:id?', {
		templateUrl : 'views/book.html',
		controller : 'BookController'
	});


	$routeProvider.when('/search', {
		templateUrl : 'views/search_results.html',
		controller : 'SearchController'
	});


	$routeProvider.when('/order_items', {
		templateUrl : 'views/order.html',
		controller : 'OrderController'
	});

	$routeProvider.when('/pay_order', {
		templateUrl : 'views/pay_order.html'
	});

	$routeProvider.when('/404', {
		templateUrl : '404.html'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
} ]);
