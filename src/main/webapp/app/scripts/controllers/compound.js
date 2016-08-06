FirstApp.controller(
		'CompoundController', 
		[ 
		  	'$scope',
		  	'$routeParams',
		  	'CompoundHealthEffectService',
		  	'CompoundService',
		  	'$http',
		  	function($scope, $routeParams, CompoundHealthEffectService, CompoundService, $http) {

		  		$scope.name = $routeParams.name;
		  		
		  		window.scope = $scope;
		  		
		  		CompoundService.findByName({
		  			name: $routeParams.name
		  		},function(data){
		  			$scope.compound = data[0];
		  		});
		  		var data = [];
		  		$scope.compoundHealthEffect = CompoundHealthEffectService.findByCompoundName({
		  			name: $routeParams.name
		  		}, function(resp){
		  		
		  		});
		  		
		  		$http.get("http://localhost:9955/green-market//data/rest/compounds_health_effects/by_compound_name/"+$scope.name)
		  		.success(function(resp) {
		  			
		  		  $scope.gists = resp;
		  		  
		  		  for(var i=0;i<$scope.gists.length;i++){
		  			  debugger;
		  			  var length = $scope.gists[i].healthEffectName.length * 5 - 10;
		  			  data.push({id: 0, name: $scope.gists[i].healthEffectName, r : length});
		  		  }
		  		  
		  		var width = window.innerWidth,
	            height = 950;

	        var fill = d3.scale.category10();

	        var nodes = [], labels = [],
	            foci = [{x: 480, y: 400}];

	        var svg = d3.select("#compoundHealthEffects").append("svg")
	            .attr("width", "100%")
	            .attr("height", height)
	            //.attr("domflag", '');

	        var force = d3.layout.force()
	            .nodes(nodes)
	            .links([])
	            //.chargeDistance(200)
	            .gravity(0.0001)
	            .size([width, height])
	            .on("tick", tick);

	        //var node = svg.selectAll("circle");
	        var node = svg.selectAll("g");

	        var counter = 0;

	        function tick(e) {
	          var k = .007 * e.alpha;

	          // Push nodes toward their designated focus.
	          nodes.forEach(function(o, i) {
	            o.y += (foci[o.id].y - o.y) * k;
	            o.x += (foci[o.id].x - o.x) * k;
	          });

	          node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	        }


	        var timer = setInterval(function(){

	          if (nodes.length > data.length-1) { clearInterval(timer); return;}

	          var item = data[counter];
	          nodes.push({id: item.id, r: item.r, name: item.name});
	          force.start();

	          node = node.data(nodes);

	          var n = node.enter().append("g")
	              .attr("class", "node")
	              .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
	              .style('cursor', 'pointer')
	              .on('mousedown', function() {
	                 var sel = d3.select(this);
	                 sel.moveToFront();
	              })
	              .call(force.drag);

	          n.append("circle")
	              .attr("r",  function(d) { return d.r; })
	              .style("fill", function(d) { return fill(d.id); })

	          n.append("text")
	              .text(function(d){
	                  return d.name;
	              })
	              .style("font-size", function(d) {
	                  return 14 + "px"; 
	               })
	              .attr("dy", ".22em")

	          counter++;
	        }, 300);


	        d3.selection.prototype.moveToFront = function() {
	          return this.each(function(){
	            this.parentNode.appendChild(this);
	          });
	        };

	        function resize() {
	          width = window.innerWidth;
	          force.size([width, height]);
	          force.start();
	        }

	        d3.select(window).on('resize', resize);
		  		});
		  		
		  		
		  		
		  		
		  	
		  	
		}]);