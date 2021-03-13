import React from "react";
import ReacipeItem from "./RecipeItem";

const Recipes = (props) => {
    const {resc} = props;
    return (

            <div className="card-columns">
            {
                resc.map(recipes => <ReacipeItem 
                    label={recipes.recipe.label}
                    image={recipes.recipe.image}
                    ingredientLines={recipes.recipe.ingredientLines}
                    />)
            }
            </div>
    );
}

export default Recipes;