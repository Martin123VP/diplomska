package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.AllRecipes;
import mk.ukim.finki.wp.model.Compound;
import mk.ukim.finki.wp.model.CompoundFood;
import mk.ukim.finki.wp.service.CrudAllRecipesService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/all_recipes")
public class AllRecipesResource extends CrudResource<AllRecipes,CrudAllRecipesService> {

	@Autowired
	private CrudAllRecipesService service;

	@Override
	public CrudAllRecipesService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_recipe_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public AllRecipes getByName(@PathVariable String name) {
		return getService().findByName(name);
	}
	
	@RequestMapping(value = "/by_recipe_ingredient_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<AllRecipes> getRecipeByIngredientName(@PathVariable String name) {
		return getService().findRecipeByIngredientName(name);
	}
	
	@RequestMapping(value = "/search_by_recipe_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<AllRecipes> getTop10ByFoodNameLike(@PathVariable String name) {
		return getService().findTop10ByNameWhereLike(name);
	}
	
}
