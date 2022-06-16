const Favorites = (props) => {
    let favorites = props.favorite
    const mappedData = favorites.map((favorite) => {
        return (
            <a href={favorite.url} target='_blank'>{favorite.id}</a>
        )
    })
    return (
        <div>
            <p>You have favorited the below items!<button onClick={props.handleClear}>Clear all</button></p>
            {mappedData}
        </div>
    );
}

export default Favorites;