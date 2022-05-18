
const RecipeTile = (props) => {
    return (
        <li className="RecipeTile">
            <img src={props.food.images.REGULAR.url} alt={props.food.label} />
            <section>
                <p className="FoodName">Name: {props.food.label}</p>
                <p>Calories: {props.food.calories}</p>
                <p>Cuisine: {props.food.cuisineType}</p>
                <a href={props.food.url} target='_blank'> More Information </a>
            </section>
            <button onClick={props.handleFavorite} className="FavBtn" id={props.food.label}>Favorite</button>
        </li>
    );
}

export default RecipeTile;