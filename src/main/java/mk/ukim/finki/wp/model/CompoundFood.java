package mk.ukim.finki.wp.model;


import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "compounds_foods")
public class CompoundFood extends BaseEntity {
    
    @ManyToOne
    private Compound compound;
    @ManyToOne
    private Food food;
    private String orig_food_common_name;
    private String orig_compound_name;

    public Compound getCompound() {
        return compound;
    }

    public Food getFood() {
        return food;
    }

    public String getOrig_food_common_name() {
        return orig_food_common_name;
    }

    public String getOrig_compound_name() {
        return orig_compound_name;
    }

    public void setCompound(Compound compound) {
        this.compound = compound;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    public void setOrig_food_common_name(String orig_food_common_name) {
        this.orig_food_common_name = orig_food_common_name;
    }

    public void setOrig_compound_name(String orig_compound_name) {
        this.orig_compound_name = orig_compound_name;
    }
    
    
}
