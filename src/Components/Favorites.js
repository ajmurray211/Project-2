import { Offcanvas, Button} from "react-bootstrap"

const Favorites = (props) => {
    let favorites = props.favorite
    const mappedData = favorites.map((favorite) => {
        return (
            <li id='favItem'>
                <a href={favorite.url} target='_blank'>{favorite.id}</a>
                <Button size="sm" id={favorite.id} onClick={props.handleRemove}>Remove</Button>
            </li>
        )
    })

    return (
        <div>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Favorited items</Offcanvas.Title>
                <Button onClick={props.handleClear}>Clear all</Button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {mappedData}
                </ul>
            </Offcanvas.Body>

        </div>
    );
}

export default Favorites;