package mk.ukim.finki.wp.service.impl;

import mk.ukim.finki.wp.model.HealthEffect;
import mk.ukim.finki.wp.repository.HealthEffectRepository;
import mk.ukim.finki.wp.service.CrudHealthEffectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudCompoundHealthEffectServiceImpl extends
BaseEntityCrudServiceImpl<HealthEffect, HealthEffectRepository> implements
		CrudHealthEffectService {

	@Autowired
	private HealthEffectRepository repository;

	@Override
	protected HealthEffectRepository getRepository() {
		return repository;
	}

}
