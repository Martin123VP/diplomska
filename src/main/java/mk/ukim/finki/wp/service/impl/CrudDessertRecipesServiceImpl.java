package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.DessertRecipes;
import mk.ukim.finki.wp.repository.DessertRecipesRepository;
import mk.ukim.finki.wp.service.CrudDessertRecipesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudDessertRecipesServiceImpl extends
BaseEntityCrudServiceImpl<DessertRecipes, DessertRecipesRepository> implements
		CrudDessertRecipesService {

	@Autowired
	private DessertRecipesRepository repository;

	@Override
	protected DessertRecipesRepository getRepository() {
		return repository;
	}

	@Override
	public DessertRecipes findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<DessertRecipes> findRecipeByIngredientName(String name) {
		return repository.findRecipesByIngredientName(name);
	}
}
