package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.CompoundHealthEffect;

public interface CrudCompoundHealthEffectService extends BaseEntityCrudService<CompoundHealthEffect> {
	public List<CompoundHealthEffect> findByCompoundName(String name);
	
	public List<CompoundHealthEffect> findByHealthEffectName(String name);
}
