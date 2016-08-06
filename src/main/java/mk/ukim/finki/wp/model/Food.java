package mk.ukim.finki.wp.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "foods")
public class Food extends BaseEntity {
	
    private String name;
    @Column(name = "name_scientific")
    private String scientific;
    @Column(name = "food_group")
    private String group;
    @Column(name = "food_subgroup")
    private String subgroup;
    
    private String description;
    
   
    public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
        return name;
    }

    public String getScientific() {
        return scientific;
    }

    public String getGroup() {
        return group;
    }

    public String getSubgroup() {
        return subgroup;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setScientific(String scientific) {
        this.scientific = scientific;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public void setSubgroup(String subgroup) {
        this.subgroup = subgroup;
    }
    
    
    
}
