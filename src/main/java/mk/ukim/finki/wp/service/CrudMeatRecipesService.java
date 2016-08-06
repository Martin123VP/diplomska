package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.MeatRecipes;

public interface CrudMeatRecipesService extends BaseEntityCrudService<MeatRecipes> {
	MeatRecipes findByName(String name);
	
	public List<MeatRecipes> findRecipeByIngredientName(String name);
}
