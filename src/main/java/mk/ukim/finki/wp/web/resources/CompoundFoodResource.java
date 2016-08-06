package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.CompoundFood;
import mk.ukim.finki.wp.service.CrudCompoundFoodService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/compounds_foods")
public class CompoundFoodResource extends CrudResource<CompoundFood, CrudCompoundFoodService> {

	@Autowired
	private CrudCompoundFoodService service;

	@Override
	public CrudCompoundFoodService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_food_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<CompoundFood> getByFoodName(@PathVariable String name) {
		return getService().findByFoodName(name);
	}

}
