package mk.ukim.finki.wp.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "compounds")
public class Compound extends BaseEntity {

    @Column(name = "moldb_formula")
    private String formula;
    @Column(name = "moldb_inchi")
    private String inchi;
    private String type;
    private String name;
    @Column(name = "moldb_smiles")
    private String smiles;
    @Column(name = "percent_composition")
    private String percenComposition;
    @Column(name = "moldb_pka")
    private String moldbPka;
    @Column(name = "moldb_logp")
    private String moldbLogp;
    @Column(name = "moldb_average_mass")
    private String moldbAverageMass;
    @Column(name = "moldb_mono_mass")
    private String moldbMonoMass;
    public String getMoldbMonoMass() {
		return moldbMonoMass;
	}

	public void setMoldbMonoMass(String moldbMonoMass) {
		this.moldbMonoMass = moldbMonoMass;
	}

	public String getMoldbPka() {
		return moldbPka;
	}

	public void setMoldbPka(String moldbPka) {
		this.moldbPka = moldbPka;
	}

	public String getMoldbLogp() {
		return moldbLogp;
	}

	public void setMoldbLogp(String moldbLogp) {
		this.moldbLogp = moldbLogp;
	}

	public String getMoldbAverageMass() {
		return moldbAverageMass;
	}

	public void setMoldbAverageMass(String moldbAverageMass) {
		this.moldbAverageMass = moldbAverageMass;
	}

	public String getPercenComposition() {
		return percenComposition;
	}

	public void setPercenComposition(String percenComposition) {
		this.percenComposition = percenComposition;
	}

	public String getSmiles() {
        return smiles;
    }

    public void setSmiles(String smiles) {
        this.smiles = smiles;
    }

    public String getFormula() {
        return formula;
    }

    public String getInchi() {
        return inchi;
    }

    public String getType() {
        return type;
    }

    public String getName() {
        return name;
    }

    public void setFormula(String formula) {
        this.formula = formula;
    }

    public void setInchi(String inchi) {
        this.inchi = inchi;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setName(String name) {
        this.name = name;
    }
        
    
	
}
