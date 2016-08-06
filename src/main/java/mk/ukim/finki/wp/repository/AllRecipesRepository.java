package mk.ukim.finki.wp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import mk.ukim.finki.wp.model.AllRecipes;



public interface AllRecipesRepository extends JpaSpecificationRepository<AllRecipes> {
	public AllRecipes findByName(String name);
	
	@Query("SELECT f FROM AllRecipes f WHERE f.ingredientName LIKE CONCAT('%',:name,'%')")
	public List<AllRecipes> findRecipesByIngredientName(@Param("name") String name);
	
}
