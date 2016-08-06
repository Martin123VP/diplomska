package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.DessertRecipes;

public interface CrudDessertRecipesService extends BaseEntityCrudService<DessertRecipes> {
	DessertRecipes findByName(String name);
	
	public List<DessertRecipes> findRecipeByIngredientName(String name);
}
