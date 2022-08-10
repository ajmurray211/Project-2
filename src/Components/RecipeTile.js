import { Button } from "react-bootstrap";

const RecipeTile = (props) => {
// console.log(props.food)

    return (
        <li className="Tile">
            <img src={props.food.images.REGULAR.url} alt={props.food.label} />
            <section>
                <p className="FoodName">Name: {props.food.label}</p>
                <p>Cuisine: {props.food.cuisineType}</p>
                <p>Yield: {props.food.yield}</p>
                <p>Dish type: {props.food.dishType}</p>
                <a href={props.food.url} target='_blank'> More Information </a>
            </section>
            <Button onClick={() => props.handleFavorite(props.food.label, props.food.url)} className="FavBtn">Favorite</Button>
        </li>
    );
}

export default RecipeTile;