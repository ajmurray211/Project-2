const Favorites = (props) => {
    let names = props.favorite
    const mappedNames = names.map((name) =>{
        return(
            <li>{name}</li>
        )
    })
    return ( 
        <div>
            <p>this will be where the selected favorite meals will display</p>
            {mappedNames}
        </div>
     );
}
 
export default Favorites;