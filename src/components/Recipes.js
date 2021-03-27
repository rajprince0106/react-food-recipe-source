/*import React from "react";

function Recipes() {
     return <h1> All recipes </h1>
}

export default Recipes;*/

//import React from "react";
//import RecipeItem from "./RecipeItem";

/*const Recipes = props => {
  const { recipes } = props;
  return (
    <div class="row">
      {recipes.map(recipe => (
          <div class="col-md-3">
              <div class="card py-2 text-center">
                  <img src={recipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle" />
                  <div class="card-body">
                      <h5>{recipe.recipe.label}</h5>
                  </div>
              </div>
        
    </div>
      ))}
      </div>
  );
};

export default Recipes;*/

import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes } = props;
  return (
    <div class="card-columns">
      {recipes.map(recipe => (
        <RecipeItem
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;