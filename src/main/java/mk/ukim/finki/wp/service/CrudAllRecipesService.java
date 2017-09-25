package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.AllRecipes;

public interface CrudAllRecipesService extends BaseEntityCrudService<AllRecipes> {
	AllRecipes findByName(String name);
	
	public List<AllRecipes> findRecipeByIngredientName(String name);
	
	public List<AllRecipes> findTop10ByNameWhereLike(String name);
}
