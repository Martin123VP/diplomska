package mk.ukim.finki.wp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.search.annotations.IndexedEmbedded;

@Entity
@Table(name = "meat_recepie_compound")

public class MeatRecepieCompound extends BaseEntity {

    
    private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}