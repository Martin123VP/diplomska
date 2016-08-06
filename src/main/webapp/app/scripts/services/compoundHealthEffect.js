FirstApp.factory('CompoundHealthEffectService',['$resource', 'settings', function($resource, settings){
	
	return $resource('data/rest/compounds_healt_effects', {}, {
		findByCompoundName: {
		      method: 'GET',
		      url: "/data/rest/compounds_health_effects/by_compound_name/:name",
		      isArray: true
		},
		findByHealthEffectName: {
			method: 'GET',
			url: "/data/rest/compounds_health_effects/by_health_effect_name/:name",
			isArray: true
		}
		   
	});
}]);