package mk.ukim.finki.wp.web.resources;

import mk.ukim.finki.wp.model.HealthEffect;
import mk.ukim.finki.wp.service.CrudHealthEffectService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/health_effects")
public class HealthEffectResource extends CrudResource<HealthEffect, CrudHealthEffectService> {

	@Autowired
	private CrudHealthEffectService service;

	@Override
	public CrudHealthEffectService getService() {
		return service;
	}
	
}
