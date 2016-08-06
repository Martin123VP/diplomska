package mk.ukim.finki.wp.web.resources;

import mk.ukim.finki.wp.model.MeatRecipe;
import mk.ukim.finki.wp.service.CrudMeatRecipeService;
import mk.ukim.finki.wp.web.CrudResource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data/rest/meat_recipe")
public class MeatRecipeResource extends CrudResource<MeatRecipe,CrudMeatRecipeService> {

	@Autowired
	private CrudMeatRecipeService service;

	@Override
	public CrudMeatRecipeService getService() {
		return service;
	}
	
}
