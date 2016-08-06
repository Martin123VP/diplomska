package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.DessertRecipes;
import mk.ukim.finki.wp.service.CrudDessertRecipesService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/dessert_recipes")
public class DessertRecipesResource extends CrudResource<DessertRecipes,CrudDessertRecipesService> {

	@Autowired
	private CrudDessertRecipesService service;

	@Override
	public CrudDessertRecipesService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_recipe_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public DessertRecipes getByName(@PathVariable String name) {
		return getService().findByName(name);
	}
	
	@RequestMapping(value = "/by_recipe_ingredient_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<DessertRecipes> getRecipeByIngredientName(@PathVariable String name) {
		return getService().findRecipeByIngredientName(name);
	}
	
}
