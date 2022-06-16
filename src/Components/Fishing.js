import { useState, useEffect } from 'react'
import FishTile from './FishTile'

const Fishing = () => {
    const [fishData, setFishData] = useState([])
    const { search, setSearch } = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
    }
    console.log(search)
    // This request is for salt water fish that has 115 options 
    const handleSubmit = () => {
        fetch(`https://www.fishwatch.gov/api/species/${search}`)
            .then(response => response.json())
            .then(data => setFishData(data))
            .catch(() => console.log('Call failed'))
    }

    // mapping over the state and returning a tile
    const mappedFish = fishData.map((fish) => {
        //console.log(fish)
        if (fish) {
            return <FishTile
                fish={fish}
            />
        } else {
            return <li>No Data</li>
        }

    })
    return (
        <>
            <h1>This page will display fishing information. This feature is still under development stay tuned!</h1>
            {/* <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter the name of a fish' onChange={handleChange} value={search}></input>
                <input type='submit'></input>
            </form>
            <ul>
                {mappedFish}
            </ul> */}
        </>
    );
}

export default Fishing;