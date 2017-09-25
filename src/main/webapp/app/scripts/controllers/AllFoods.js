FirstApp
		.controller(
				'allFoodsController',
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
	
								var foodService = crudService('foods');
								
								var data = foodService.query(function(){
									tableParamsLoad();
								}); 
								
								var tableParamsLoad = function(){
									$scope.tableParams = new ngTableParams(
											{
												page : 1,
												count : 10,
												sorting : {
													name : 'asc'
												}
											},
											{
												total : data.length,
												counts : [10, 20, 40],

												// groupBy: 'price',
												getData : function($defer, params) {
													
													var filteredData = params.filter() ? $filter(
															'filter')(data,
															params.filter()) : data;

													var orderedData = params
															.sorting() ? $filter(
															'orderBy')(
															filteredData,
															params.orderBy())
															: filteredData;

													params
															.total(orderedData.length); // set
																						// total
																						// for
																						// recalc
																						// paginati

													$defer
															.resolve(orderedData
																	.slice(
																			(params
																					.page() - 1)
																					* params
																							.count(),
																			params
																					.page()
																					* params
																							.count()));
												}
											}, function(error) {
												console.log('errror', error);
											});
								}
								
								
							
}]);