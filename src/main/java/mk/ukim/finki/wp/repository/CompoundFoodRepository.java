package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.CompoundFood;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface CompoundFoodRepository extends JpaSpecificationRepository<CompoundFood> {
    public List<CompoundFood> findByFoodName(String name);
    
    @Query(value="SELECT distinct f.name, f.food_group, f.food_subgroup FROM foods f, compounds c, compounds_foods cf WHERE cf.food_id = f.id and cf.compound_id = c.id and c.name LIKE :name ", nativeQuery = true)
    public List<CompoundFood> findDistinctByCompoundName(@Param("name") String name);
}
