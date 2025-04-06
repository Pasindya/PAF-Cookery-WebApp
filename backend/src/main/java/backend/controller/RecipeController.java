package backend.controller;

import backend.model.RecipeModel;
import backend.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

@RestController
@CrossOrigin("http://localhost:5173")
public class RecipeController {
    @Autowired

    private RecipeRepository recipeRepository;

    //insert data
    @PostMapping("/recipe")
    public RecipeModel newRecipeModel(@RequestBody RecipeModel newRecipeModel){
        return recipeRepository.save(newRecipeModel);
    }
    //insert image
    @PostMapping("recipe/recipeImage")
    public String recipeImage(@RequestParam("file")MultipartFile file){
        String folder ="src/main/uploads/";
        String recipeImage = file.getOriginalFilename();

        try{
            File uploadDir = new File(folder);
            if(!uploadDir.exists()){
                uploadDir.mkdir();
            }
            file.transferTo(Paths.get(folder+recipeImage));
        }catch (IOException e){
            e.printStackTrace();
            return "Error uploading file; " + recipeImage;
        }
        return recipeImage;
    }


}
