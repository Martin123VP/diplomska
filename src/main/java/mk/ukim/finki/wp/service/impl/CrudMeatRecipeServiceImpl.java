package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.Compound;
import mk.ukim.finki.wp.model.MeatRecipe;
import mk.ukim.finki.wp.repository.MeatRecipeRepository;
import mk.ukim.finki.wp.service.CrudMeatRecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudMeatRecipeServiceImpl extends
BaseEntityCrudServiceImpl<MeatRecipe, MeatRecipeRepository> implements
		CrudMeatRecipeService {

	@Autowired
	private MeatRecipeRepository repository;

	@Override
	protected MeatRecipeRepository getRepository() {
		return repository;
	}
}
