import { useState, useEffect } from "react"
import Favorites from "./Favorites";
import RecipeTile from "./RecipeTile";

const Recipes = (props) => {
// console.log(props)
    const [recipes, setRecipes] = useState([])
    const [recipeSearch, setRecipeSearch] = useState('')
    const [searchVal, setSearchVal] = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        setSearchVal(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchVal}&app_id=f6eefa00&app_key=8ebf1e1223eb8c398580458b31f482d8`)
            .then(response => response.json())
            .then(data => setRecipes(data.hits))
            .catch(() => console.log('Call failed'))
            setSearchVal('')
    }

    const handleFavorite = (event, props) => {
        // console.log(event.target.id)
        event.preventDefault()
        let copyFavorites= [...props.favorite]
        copyFavorites.push(event.target.id)
        props.setFavorites(copyFavorites)
    }
    // console.log(props.favorite)

   

    const mappedInfo = recipes.map((foodInfo, i) => {
        return <RecipeTile
            food={foodInfo.recipe}
            handleFavorite={handleFavorite}
        ></RecipeTile>
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter an animal or food' onChange={handleChange} value={searchVal}></input>
                <input type='submit' ></input>
            </form>
            <ul>
                {mappedInfo}
            </ul>
        </div>
    );
}

export default Recipes;