import { useState, useEffect } from "react"
import RecipeTile from "./RecipeTile";

const Recipes = (props) => {

    const [recipes, setRecipes] = useState([])
    const [recipeSearch, setRecipeSearch] = useState([])

    useEffect(() => {

        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=f6eefa00&app_key=8ebf1e1223eb8c398580458b31f482d8')
            .then(response => response.json())
            .then(data => setRecipes(data.hits))
            .catch(() => console.log('Call failed'))
    }, [])

    const mappedInfo = recipes.map((foodInfo, i) => {
        return <RecipeTile
         food={foodInfo.recipe}
        ></RecipeTile>
    })

    return (
        <ul>
            {mappedInfo}
        </ul>
    );
}

export default Recipes;