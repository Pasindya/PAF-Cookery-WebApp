package backend.repository;

import backend.model.RecipeModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<RecipeModel,Long>{


}
