package mk.ukim.finki.wp.service.impl;

import java.util.List;

import mk.ukim.finki.wp.model.CompoundHealthEffect;
import mk.ukim.finki.wp.repository.CompoundHealthEffectRepository;
import mk.ukim.finki.wp.service.CrudCompoundHealthEffectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudHealthEffectServiceImpl extends
BaseEntityCrudServiceImpl<CompoundHealthEffect, CompoundHealthEffectRepository> implements
		CrudCompoundHealthEffectService {

	@Autowired
	private CompoundHealthEffectRepository repository;

	@Override
	protected CompoundHealthEffectRepository getRepository() {
		return repository;
	}

	@Override
	public List<CompoundHealthEffect> findByCompoundName(String name) {
		return repository.findByCompoundName(name);
	}

	@Override
	public List<CompoundHealthEffect> findByHealthEffectName(String name) {
		return repository.findByHealthEffectName(name);
	}

}
