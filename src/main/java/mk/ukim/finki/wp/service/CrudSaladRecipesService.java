package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.SaladRecipes;

public interface CrudSaladRecipesService extends BaseEntityCrudService<SaladRecipes> {
	SaladRecipes findByName(String name);
	
	public List<SaladRecipes> findRecipeByIngredientName(String name);
}
