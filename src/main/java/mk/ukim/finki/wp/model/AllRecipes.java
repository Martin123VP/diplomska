package mk.ukim.finki.wp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "all_recipes")
public class AllRecipes extends BaseEntity {
	private String resource;
	private String name;
	private String comment;
	private String servingTemperature;
	private String ingredientName;
	@Column(name="thumbnai")
	private String thumbnail;
	public String getResource() {
		return resource;
	}
	public void setResource(String resource) {
		this.resource = resource;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getServingTemperature() {
		return servingTemperature;
	}
	public void setServingTemperature(String servingTemperature) {
		this.servingTemperature = servingTemperature;
	}
	public String getIngredientName() {
		return ingredientName;
	}
	public void setIngredientName(String ingredientName) {
		this.ingredientName = ingredientName;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	
	
}
