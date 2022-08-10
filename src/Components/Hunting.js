import { useState, useEffect } from 'react'
import HuntingTile from './HuntingTile';

const Hunting = () => {
    const [huntingData, setHuntingData] = useState([])

    useEffect(() => {
        fetch(`https://quiet-gorge-88095.herokuapp.com/hunting/?format=json`)
            .then(response => response.json())
            .then(data => setHuntingData(data))
            .catch(() => console.log('Call failed'))
    }, [])

    // mapping over the state and returning a tile
    const mappedAnimals = huntingData.map((animal) => {
        if (animal) {
            return <HuntingTile
                animal={animal}
            />
        } else {
            return <li>No Data</li>
        }
    })
console.log(huntingData)

    return (
        <>
            {/* <h1>This page will display hunting information. This feature is still under development stay tuned!</h1> */}
            <ul className='container'>
                {mappedAnimals}
            </ul>
        </>
    );
}

export default Hunting;