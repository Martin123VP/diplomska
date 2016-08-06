package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.SaladRecipes;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface SaladRecipesRepository extends JpaSpecificationRepository<SaladRecipes> {
	public SaladRecipes findByName(String name);
	
	@Query("SELECT f FROM AllRecipes f WHERE f.ingredientName LIKE CONCAT('%',:name,'%')")
	public List<SaladRecipes> findRecipesByIngredientName(@Param("name") String name);
	
}
