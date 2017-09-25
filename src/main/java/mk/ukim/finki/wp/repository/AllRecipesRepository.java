package mk.ukim.finki.wp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import mk.ukim.finki.wp.model.AllRecipes;
import mk.ukim.finki.wp.model.Food;



public interface AllRecipesRepository extends JpaSpecificationRepository<AllRecipes> {
	public AllRecipes findByName(String name);
	
	@Query("SELECT f FROM AllRecipes f WHERE f.ingredientName LIKE CONCAT('%',:name,'%')")
	public List<AllRecipes> findRecipesByIngredientName(@Param("name") String name);
	
	@Query(value = "SELECT * FROM all_recipes f WHERE f.ingredientName LIKE CONCAT('%',:name,'%') Limit 10", nativeQuery = true)
    public List<AllRecipes> findTop10ByNameWhereLike(@Param("name") String name);
	
}
