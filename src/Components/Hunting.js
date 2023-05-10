import { useState, useEffect } from 'react'
import huntingData from './data/hunting/huntingData';
import HuntingTile from './HuntingTile';

const Hunting = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        // fetch(`https://quiet-gorge-88095.herokuapp.com/hunting/?format=json`)
        //     .then(response => response.json())
        //     .then(data => setHuntingData(data))
        //     .catch(() => console.log('Call failed'))
        setData(huntingData)
    }, [])

    // mapping over the state and returning a tile
    const mappedAnimals = data.map((animal) => {
        if (animal) {
            return <HuntingTile
                animal={animal}
            />
        } else {
            return <li>No Data</li>
        }
    })
// console.log(huntingData)

    return (
        <>
            {/* <h1>This page will display hunting information. This feature is still under development stay tuned!</h1> */}
            <section className='container'>
                {mappedAnimals}
            </section>
        </>
    );
}

export default Hunting;