package mk.ukim.finki.wp.web.resources;

import java.util.List;

import mk.ukim.finki.wp.model.PastaRecipes;
import mk.ukim.finki.wp.service.CrudPastaRecipesService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/pasta_recipes")
public class PastaRecipesResource extends CrudResource<PastaRecipes,CrudPastaRecipesService> {

	@Autowired
	private CrudPastaRecipesService service;

	@Override
	public CrudPastaRecipesService getService() {
		return service;
	}
	
	@RequestMapping(value = "/by_recipe_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public PastaRecipes getByName(@PathVariable String name) {
		return getService().findByName(name);
	}
	
	@RequestMapping(value = "/by_recipe_ingredient_name/{name}", method = RequestMethod.GET, produces = "application/json")
	public List<PastaRecipes> getRecipeByIngredientName(@PathVariable String name) {
		return getService().findRecipeByIngredientName(name);
	}
	
}
