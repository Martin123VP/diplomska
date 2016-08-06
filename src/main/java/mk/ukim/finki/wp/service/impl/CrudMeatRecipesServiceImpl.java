package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.MeatRecipes;
import mk.ukim.finki.wp.repository.MeatRecipesRepository;
import mk.ukim.finki.wp.service.CrudMeatRecipesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudMeatRecipesServiceImpl extends
BaseEntityCrudServiceImpl<MeatRecipes, MeatRecipesRepository> implements
		CrudMeatRecipesService {

	@Autowired
	private MeatRecipesRepository repository;

	@Override
	protected MeatRecipesRepository getRepository() {
		return repository;
	}

	@Override
	public MeatRecipes findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<MeatRecipes> findRecipeByIngredientName(String name) {
		return repository.findRecipesByIngredientName(name);
	}
}
