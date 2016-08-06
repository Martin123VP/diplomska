package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.PastaRecipes;
import mk.ukim.finki.wp.repository.PastaRecipesRepository;
import mk.ukim.finki.wp.service.CrudPastaRecipesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudPastaRecipesServiceImpl extends
BaseEntityCrudServiceImpl<PastaRecipes, PastaRecipesRepository> implements
		CrudPastaRecipesService {

	@Autowired
	private PastaRecipesRepository repository;

	@Override
	protected PastaRecipesRepository getRepository() {
		return repository;
	}

	@Override
	public PastaRecipes findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<PastaRecipes> findRecipeByIngredientName(String name) {
		return repository.findRecipesByIngredientName(name);
	}
}
