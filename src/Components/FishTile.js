const FishTile = (porps) => {
    console.log(porps.fish)
    return (
        <li>
            <img src={porps.fish.imgMain} alt={porps.fish.name}></img>
            <p>Name: {porps.fish.name}</p>
        </li>
    );
}

export default FishTile;