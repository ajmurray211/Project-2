import { useState, useEffect } from 'react'
import FishTile from './FishTile'

const Fishing = () => {
    const [fishData, setFishData] = useState([])
    const [search, setSearch ] = useState('')

    // endpoint for personal api
    // https://quiet-gorge-88095.herokuapp.com/fish/?format=json

    useEffect(() => {
        fetch(`https://quiet-gorge-88095.herokuapp.com/fish/?format=json`)
            .then(response => response.json())
            .then(data => setFishData(data))
            .catch(() => console.log('Call failed'))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearch('')
    }

    const handleChange = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }

    // mapping over the state and returning a tile
    const mappedFish = fishData.map((fish) => {
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
            {/* <h1>This page will display fishing information. This feature is still under development stay tuned!</h1> */}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter the name of a fish' onChange={handleChange} value={search}></input>
                <input type='submit'></input>
            </form>
            <ul className='container'>
                {mappedFish}
            </ul>
        </>
    );
}

export default Fishing;