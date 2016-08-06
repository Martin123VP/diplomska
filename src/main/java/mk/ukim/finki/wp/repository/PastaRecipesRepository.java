package mk.ukim.finki.wp.repository;

import java.util.List;

import mk.ukim.finki.wp.model.PastaRecipes;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface PastaRecipesRepository extends JpaSpecificationRepository<PastaRecipes> {
	public PastaRecipes findByName(String name);
	
	@Query("SELECT f FROM AllRecipes f WHERE f.ingredientName LIKE CONCAT('%',:name,'%')")
	public List<PastaRecipes> findRecipesByIngredientName(@Param("name") String name);
	
}
