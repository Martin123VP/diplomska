package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.Food;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface FoodRepository extends JpaSpecificationRepository<Food> {
    public List<Food> findByName(String name);
    
    @Query("SELECT f FROM Food f WHERE f.name LIKE CONCAT('%',:name,'%')")
    public List<Food> findByNameWhereLike(@Param("name") String name);
    
    public List<Food> findByGroup(String name);
    
    public List<Food> findBySubgroup(String name);
}
