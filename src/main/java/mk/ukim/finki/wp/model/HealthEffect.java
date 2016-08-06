package mk.ukim.finki.wp.model;


import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "health_effects")
public class HealthEffect extends BaseEntity {

    private String name;
    private String chebi_name;
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getChebi_name() {
		return chebi_name;
	}
	public void setChebi_name(String chebi_name) {
		this.chebi_name = chebi_name;
	}
    
    
}
