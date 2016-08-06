package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.CompoundFood;


public interface CompoundFoodRepository extends JpaSpecificationRepository<CompoundFood> {
    public List<CompoundFood> findByFoodName(String name);
}
