package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.CompoundHealthEffect;
import mk.ukim.finki.wp.model.Food;
import mk.ukim.finki.wp.service.CrudCompoundHealthEffectService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/compounds_health_effects")
public class CompoundHealthEffectResource extends CrudResource<CompoundHealthEffect, CrudCompoundHealthEffectService> {

	@Autowired
	private CrudCompoundHealthEffectService service;

	@Override
	public CrudCompoundHealthEffectService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_compound_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<CompoundHealthEffect> getByCompoundName(@PathVariable String name) {
		return getService().findByCompoundName(name);
	}
	
	@RequestMapping(value = "/by_health_effect_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<CompoundHealthEffect> getByHealthEffectName(@PathVariable String name) {
		return getService().findByHealthEffectName(name);		
	}
	
}
