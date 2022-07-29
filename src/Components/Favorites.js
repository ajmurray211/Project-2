import { Offcanvas } from "react-bootstrap"

const Favorites = (props) => {
    let favorites = props.favorite
    const mappedData = favorites.map((favorite) => {
        return (
            <li><a href={favorite.url} target='_blank'>{favorite.id}</a></li>
        )
    })
    return (
        <div>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Favorited items</Offcanvas.Title>
            </Offcanvas.Header>
            <button onClick={props.handleClear}>Clear all</button>
            <Offcanvas.Body>
                <ul>
                    {mappedData}
                </ul>
            </Offcanvas.Body>

        </div>
    );
}

export default Favorites;