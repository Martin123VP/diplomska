package mk.ukim.finki.wp.service;


import java.util.List;

import mk.ukim.finki.wp.model.Food;

public interface CrudFoodService extends BaseEntityCrudService<Food> {
	public List<Food> findByName(String name);
	
	public List<Food> findByGroup(String name);
	
	public List<Food> findBySubgroup(String name);
	
	public List<Food> findByNameWhereLike(String name);
}
