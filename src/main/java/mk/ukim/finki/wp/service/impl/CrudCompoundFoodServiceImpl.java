package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.CompoundFood;
import mk.ukim.finki.wp.repository.CompoundFoodRepository;
import mk.ukim.finki.wp.service.CrudCompoundFoodService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudCompoundFoodServiceImpl extends
BaseEntityCrudServiceImpl<CompoundFood, CompoundFoodRepository> implements
		CrudCompoundFoodService {

	@Autowired
	private CompoundFoodRepository repository;

	@Override
	protected CompoundFoodRepository getRepository() {
		return repository;
	}

	@Override
	public List<CompoundFood> findByFoodName(String name) {
		return repository.findByFoodName(name);
	}

}
