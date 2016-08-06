package mk.ukim.finki.wp.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "compounds_health_effects")
public class CompoundHealthEffect extends BaseEntity {
	
	@ManyToOne
	private HealthEffect healthEffect;
	@ManyToOne
	private Compound compound;
	@Column(name = "orig_health_effect_name")
	private String healthEffectName;
	@Column(name = "orig_compound_name")
	private String compoundName;
	public HealthEffect getHealthEffect() {
		return healthEffect;
	}
	public void setHealthEffect(HealthEffect healthEffect) {
		this.healthEffect = healthEffect;
	}
	public Compound getCompound() {
		return compound;
	}
	public void setCompound(Compound compound) {
		this.compound = compound;
	}
	public String getHealthEffectName() {
		return healthEffectName;
	}
	public void setHealthEffectName(String healthEffectName) {
		this.healthEffectName = healthEffectName;
	}
	public String getCompoundName() {
		return compoundName;
	}
	public void setCompoundName(String compoundName) {
		this.compoundName = compoundName;
	}
	
}
