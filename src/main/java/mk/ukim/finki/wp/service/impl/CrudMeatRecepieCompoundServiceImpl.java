package mk.ukim.finki.wp.service.impl;

import mk.ukim.finki.wp.model.MeatRecepieCompound;
import mk.ukim.finki.wp.repository.MeatRecepieCompoundRepository;
import mk.ukim.finki.wp.service.CrudMeatRecepieCompoundService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudMeatRecepieCompoundServiceImpl extends
BaseEntityCrudServiceImpl<MeatRecepieCompound, MeatRecepieCompoundRepository> implements
		CrudMeatRecepieCompoundService {

	@Autowired
	private MeatRecepieCompoundRepository repository;

	@Override
	protected MeatRecepieCompoundRepository getRepository() {
		return repository;
	}
}
