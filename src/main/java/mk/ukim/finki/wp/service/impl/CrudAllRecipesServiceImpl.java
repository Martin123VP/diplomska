package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.AllRecipes;
import mk.ukim.finki.wp.repository.AllRecipesRepository;
import mk.ukim.finki.wp.repository.MeatRecipeRepository;
import mk.ukim.finki.wp.service.CrudAllRecipesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudAllRecipesServiceImpl extends
BaseEntityCrudServiceImpl<AllRecipes, AllRecipesRepository> implements
		CrudAllRecipesService {

	@Autowired
	private AllRecipesRepository repository;

	@Override
	protected AllRecipesRepository getRepository() {
		return repository;
	}

	@Override
	public AllRecipes findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<AllRecipes> findRecipeByIngredientName(String name) {
		return repository.findRecipesByIngredientName(name);
	}
}
