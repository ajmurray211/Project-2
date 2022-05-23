const FishTile = (porps) => {
    console.log(porps)
    return (
        <li>
            <img src={porps.fish['Image Gallery'][0].src}></img>
            <p>Name: {porps.fish['Species Name']}</p>
            {/* <p>Quote: {porps.fish.Quote}</p> */}
            {/* <p>Color: {porps.fish.Color}</p>
            <p>Path: {porps.fish.Path}</p> */}
        </li>
    );
}

export default FishTile;