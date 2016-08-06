package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.CompoundHealthEffect;


public interface CompoundHealthEffectRepository extends JpaSpecificationRepository<CompoundHealthEffect> {
	public List<CompoundHealthEffect> findByCompoundName(String name);
	
	public List<CompoundHealthEffect> findByHealthEffectName(String name);
}
