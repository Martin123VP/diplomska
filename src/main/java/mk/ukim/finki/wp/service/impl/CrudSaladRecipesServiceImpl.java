package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.SaladRecipes;
import mk.ukim.finki.wp.repository.SaladRecipesRepository;
import mk.ukim.finki.wp.service.CrudSaladRecipesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudSaladRecipesServiceImpl extends
BaseEntityCrudServiceImpl<SaladRecipes, SaladRecipesRepository> implements
		CrudSaladRecipesService {

	@Autowired
	private SaladRecipesRepository repository;

	@Override
	protected SaladRecipesRepository getRepository() {
		return repository;
	}

	@Override
	public SaladRecipes findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<SaladRecipes> findRecipeByIngredientName(String name) {
		return repository.findRecipesByIngredientName(name);
	}
}
