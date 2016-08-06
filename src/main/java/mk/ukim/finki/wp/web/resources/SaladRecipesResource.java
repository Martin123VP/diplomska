package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.SaladRecipes;
import mk.ukim.finki.wp.service.CrudSaladRecipesService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/salad_recipes")
public class SaladRecipesResource extends CrudResource<SaladRecipes,CrudSaladRecipesService> {

	@Autowired
	private CrudSaladRecipesService service;

	@Override
	public CrudSaladRecipesService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_recipe_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public SaladRecipes getByName(@PathVariable String name) {
		return getService().findByName(name);
	}
	
	@RequestMapping(value = "/by_recipe_ingredient_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<SaladRecipes> getRecipeByIngredientName(@PathVariable String name) {
		return getService().findRecipeByIngredientName(name);
	}
	
}
