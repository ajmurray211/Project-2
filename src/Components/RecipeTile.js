
const RecipeTile = (props) => {
console.log(props.food)
return (
    <ul>
        <img src={props.food.images.REGULAR.url} alt="placeholder"/>
        <section>
            <p>{props.food.label}</p>
            <p>{props.food.calories}</p>
            <p>{props.food.cuisineType}</p>
        </section>
        <button>Favorite</button>
    </ul>
);
}

export default RecipeTile;