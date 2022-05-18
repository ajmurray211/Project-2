const Favorites = (props) => {
    let names = props.favorite
    const mappedNames = names.map((name) => {
        return (
            <li>{name}</li>
        )
    })
    return (
        <div>
            <p>You have favorited the below items!</p>
            {mappedNames}
        </div>
    );
}

export default Favorites;