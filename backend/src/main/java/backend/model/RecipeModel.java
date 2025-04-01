package backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class RecipeModel {
    @Id
    @GeneratedValue

    private Long id;
    private String title;
    private String recipeImage;
    private String  description;
    private Integer preparation_time;
    private String cuisine_type;

    public RecipeModel(){


    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRecipeImage() {
        return recipeImage;
    }

    public void setRecipeImage(String recipeImage) {
        this.recipeImage = recipeImage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPreparation_time() {
        return preparation_time;
    }

    public void setPreparation_time(Integer preparation_time) {
        this.preparation_time = preparation_time;
    }

    public String getCuisine_type() {
        return cuisine_type;
    }

    public void setCuisine_type(String cuisine_type) {
        this.cuisine_type = cuisine_type;
    }

    public RecipeModel(Long id, String title, String recipeImage, String description, Integer preparation_time, String cuisine_type) {
        this.id = id;
        this.title = title;
        this.recipeImage = recipeImage;
        this.description = description;
        this.preparation_time = preparation_time;
        this.cuisine_type = cuisine_type;
    }
}
