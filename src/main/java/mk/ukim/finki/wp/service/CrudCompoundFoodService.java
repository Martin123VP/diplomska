package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.CompoundFood;

public interface CrudCompoundFoodService extends BaseEntityCrudService<CompoundFood> {
	public List<CompoundFood> findByFoodName(String name);
	
	public List<CompoundFood> findDistinctByCompoundName(String name);
}
