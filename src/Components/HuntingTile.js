const HuntingTile = (props) => {
    return (
        <li className="Tile">
            <img src={props.animal.imgMain} alt={props.animal.name}/>
            <p>Name: {props.animal.name}</p>
        </li>
    );
}

export default HuntingTile;