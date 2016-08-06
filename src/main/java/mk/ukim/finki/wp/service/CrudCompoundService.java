package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.Compound;

public interface CrudCompoundService extends BaseEntityCrudService<Compound> {
	List<Compound> findByName(String name);
}
