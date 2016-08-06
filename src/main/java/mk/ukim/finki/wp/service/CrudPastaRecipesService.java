package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.PastaRecipes;

public interface CrudPastaRecipesService extends BaseEntityCrudService<PastaRecipes> {
	PastaRecipes findByName(String name);
	
	public List<PastaRecipes> findRecipeByIngredientName(String name);
}
