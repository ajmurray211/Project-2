import { useState } from "react"
import Favorites from "./Favorites";
import RecipeTile from "./RecipeTile";

const Recipes = (props) => {
    const [recipes, setRecipes] = useState([])
    const [searchVal, setSearchVal] = useState('')
    const [favorite, setFavorites] = useState([])

    const handleClear = () => {
        setFavorites([])
    }

    // This function is linked to the form and updates the value eveytime something in the text box is changed 
    const handleChange = (event) => {
        event.preventDefault()
        setSearchVal(event.target.value)
    }

    // This function handles the submit input attached to the form 
    // It will make a fetch request to the api every time the form is submitted using the current value of the text box
    // It will then set the state of recipes to the returned api data and return the the text box back to empty 
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchVal}&app_id=f6eefa00&app_key=8ebf1e1223eb8c398580458b31f482d8`)
            .then(response => response.json())
            .then(data => setRecipes(data.hits))
        setSearchVal('')
    }

    // This function is linked the the button returned from mappedInfo
    // It takes in the use state from app.js as a prop then makes a coppy of the array, pushes the name
    // associated with the target to the copied array and updates the state to the new array
    const handleFavorite = (id, url) => {
        let copyFavorites = [...favorite]
        copyFavorites.push({ id: id, url: url })
        setFavorites(copyFavorites)
    }

    // This takes the information from the api call and maps over it returning a recipe tile 
    // it passes an object from the api and a function as props to the recipeTile component
    const mappedInfo = recipes.map((foodInfo) => {
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
            <ul className="container">
                {mappedInfo}
            </ul>
            <footer>
                <Favorites
                    favorite={favorite}
                    handleClear={handleClear}
                ></Favorites>
            </footer>
        </div>
    );
}

export default Recipes;