package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.DessertRecipes;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface DessertRecipesRepository extends JpaSpecificationRepository<DessertRecipes> {
	public DessertRecipes findByName(String name);
	
	@Query("SELECT f FROM AllRecipes f WHERE f.ingredientName LIKE CONCAT('%',:name,'%')")
	public List<DessertRecipes> findRecipesByIngredientName(@Param("name") String name);
	
}
