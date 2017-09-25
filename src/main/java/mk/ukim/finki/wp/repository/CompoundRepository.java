package mk.ukim.finki.wp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import mk.ukim.finki.wp.model.Compound;
import mk.ukim.finki.wp.model.Food;


public interface CompoundRepository extends JpaSpecificationRepository<Compound> {
	List<Compound> findByName(String name);
	
	@Query(value = "SELECT * FROM Compound f WHERE f.name LIKE CONCAT('%',:name,'%') Limit 10", nativeQuery = true)
    public List<Compound> findTop10ByNameWhereLike(@Param("name") String name);
}
