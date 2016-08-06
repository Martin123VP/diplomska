FirstApp.controller(
		'FoodController', 
		[ 
		  	'$scope',
		  	'$routeParams',
		  	'FoodService',
		  	'FoodCompoundService',
		  	'$location',
		  	'AllRecipesService',
		  	function($scope, $routeParams, FoodService, FoodCompoundService, $location, AllRecipesService) {
		  		
		  		
		  		window.scope = $scope;
		  		
		  		
		  		/*$scope.food = FoodService.findByName({
		  			name: $routeParams.name
		  		});*/
		  		
		  		AllRecipesService.findRecipesByIngredientName({
		  			name : $routeParams.name
		  		}, function(data){
		  			debugger;
		  			$scope.recipesByFoodName = data;
		  		});
		  		
		  		FoodCompoundService.findByFoodName({
		  			name: $routeParams.name
		  		},function(data){
		  			$scope.foodCompound = data;
		  			
		  			var root = {};
		  			for(var i=0; i < $scope.foodCompound.length; i++){
		  				root = {name: $scope.foodCompound[0].food.name, children: []};
		  			}
		  			
		  			for(var i=0;i<$scope.foodCompound.length; i++){
		  				root.children.push({
		  						name: $scope.foodCompound[i].compound.name, 
		  						type: $scope.foodCompound[i].compound.type,
		  						id: $scope.foodCompound[i].compound.id, 
		  						size: 3000});
		  			}
		  			
		  			var diameter = 800,
			  	    format = d3.format(",d");

				  	var pack = d3.layout.pack()
				  	    .size([diameter - 4, diameter - 4])
				  	    .value(function(d) { return d.size; });
				  	
				  	var tooltip = d3.select("bubble")
					    .append("div")
					    .style("position", "absolute")
					    .style("z-index", "10")
					    .style("visibility", "hidden")
					    .style("color", "white")
					    .style("padding", "10px")
					    .style("background-color", "rgba(0, 0, 0, 0.75)")
					    .style("border-radius", "6px")
					    .style("font", "14px sans-serif")
					    .text("tooltip");
				  	
				  	var svg = d3.select("#bubble").append("svg")
				  	    .attr("width", diameter)
				  	    .attr("height", diameter)
				  	  .append("g")
				  	    .attr("transform", "translate(2,2)");
	
	
				  	  var node = svg.datum(root).selectAll(".node")
				  	      .data(pack.nodes)
				  	    .enter().append("g")
				  	      .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
				  	      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
					  	  .on("mouseover", function(d) {
				              tooltip.text("Name: " + d.name);
				              tooltip.style("visibility", "visible");
					      })
					      .on("mousemove", function() {
					          return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
					      })
					      .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
					      .on("click", function(d){
					    	  var url = "http://localhost:9955/green-market/#/by_compound_name/"+d.name;
					    	  $(location).attr('href', url);
					    	  //window.location = url;
					  
					      });
				  	  
	
				  	  node.append("circle")
				  	      .attr("r", function(d) { return d.r; });
	
				  	  node.filter(function(d) { return !d.children; }).append("text")
				  	      .attr("dy", ".3em")
				  	      .style("text-anchor", "middle")
				  	      .text(function(d) { return d.name.substring(0, d.r / 3); });
	
				  	d3.select(self.frameElement).style("height", diameter + "px");
		  		});
		  		
		  		
		}]);