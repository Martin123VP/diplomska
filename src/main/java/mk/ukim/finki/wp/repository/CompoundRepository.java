package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.Compound;


public interface CompoundRepository extends JpaSpecificationRepository<Compound> {
	List<Compound> findByName(String name);
}
