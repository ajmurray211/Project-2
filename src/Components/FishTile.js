const FishTile = (porps) => {
    return (
        <li className="Tile">
            <img src={porps.fish.imgMain} alt={porps.fish.name}/>
            <p>Name: {porps.fish.name}</p>
        </li>
    );
}

export default FishTile;


