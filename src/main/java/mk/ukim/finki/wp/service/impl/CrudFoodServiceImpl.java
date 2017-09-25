package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.Food;
import mk.ukim.finki.wp.repository.FoodRepository;
import mk.ukim.finki.wp.service.CrudFoodService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudFoodServiceImpl extends
BaseEntityCrudServiceImpl<Food, FoodRepository> implements
		CrudFoodService {

	@Autowired
	private FoodRepository repository;

	@Override
	protected FoodRepository getRepository() {
		return repository;
	}

	@Override
	public List<Food> findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<Food> findByGroup(String name) {
		return repository.findByGroup(name);
	}

	@Override
	public List<Food> findBySubgroup(String name) {
		return repository.findBySubgroup(name);
	}

	@Override
	public List<Food> findByNameWhereLike(String name) {
		return repository.findByNameWhereLike(name);
	}

	@Override
	public List<Food> findTop10ByNameWhereLike(String name) {
		return repository.findTop10ByNameWhereLike(name);
	}

}
