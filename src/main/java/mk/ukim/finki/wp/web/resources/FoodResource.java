package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.Food;
import mk.ukim.finki.wp.model.Product;
import mk.ukim.finki.wp.service.CrudFoodService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/foods")
public class FoodResource extends CrudResource<Food, CrudFoodService> {

	@Autowired
	private CrudFoodService service;

	@Override
	public CrudFoodService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_food_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<Food> getByFoodName(@PathVariable String name) {
		return getService().findByName(name);
	}
	
	@RequestMapping(value = "/by_food_name_like/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<Food> getByFoodNameLike(@PathVariable String name) {
		return getService().findByNameWhereLike(name);
	}
	
	@RequestMapping(value = "/by_food_group/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<Food> getByFoodGroup(@PathVariable String name) {
		return getService().findByGroup(name);
	}
	
	@RequestMapping(value = "/by_food_subgroup/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<Food> getByFoodSubgroup(@PathVariable String name) {
		return getService().findBySubgroup(name);
	}
	
	@RequestMapping(value = "/search_by_food_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<Food> getTop10ByFoodNameLike(@PathVariable String name) {
		return getService().findTop10ByNameWhereLike(name);
	}
}
