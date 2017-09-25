package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.Compound;
import mk.ukim.finki.wp.repository.CompoundRepository;
import mk.ukim.finki.wp.service.CrudCompoundService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudCompoundServiceImpl extends
BaseEntityCrudServiceImpl<Compound, CompoundRepository> implements
		CrudCompoundService {

	@Autowired
	private CompoundRepository repository;

	@Override
	protected CompoundRepository getRepository() {
		return repository;
	}

	@Override
	public List<Compound> findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<Compound> findTop10ByNameWhereLike(String name) {
		// TODO Auto-generated method stub
		return repository.findTop10ByNameWhereLike(name);
	}

}
