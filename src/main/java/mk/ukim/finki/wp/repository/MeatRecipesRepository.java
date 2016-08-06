package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.MeatRecipes;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface MeatRecipesRepository extends JpaSpecificationRepository<MeatRecipes> {
	public MeatRecipes findByName(String name);
	
	@Query("SELECT f FROM AllRecipes f WHERE f.ingredientName LIKE CONCAT('%',:name,'%')")
	public List<MeatRecipes> findRecipesByIngredientName(@Param("name") String name);
	
}
