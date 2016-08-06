package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.MeatRecipes;
import mk.ukim.finki.wp.service.CrudMeatRecipesService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/meat_recipes")
public class MeatRecipesResource extends CrudResource<MeatRecipes,CrudMeatRecipesService> {

	@Autowired
	private CrudMeatRecipesService service;

	@Override
	public CrudMeatRecipesService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_recipe_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public MeatRecipes getByName(@PathVariable String name) {
		return getService().findByName(name);
	}
	
	@RequestMapping(value = "/by_recipe_ingredient_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<MeatRecipes> getRecipeByIngredientName(@PathVariable String name) {
		return getService().findRecipeByIngredientName(name);
	}
	
}
