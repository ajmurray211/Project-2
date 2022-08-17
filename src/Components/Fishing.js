import { useState, useEffect, useReducer } from 'react'
import FishTile from './FishTile'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Spinner } from 'reactstrap';
import useFetch from './useFetch';
import axios from 'axios'


// const API_URL = 'https://quiet-gorge-88095.herokuapp.com'
const API_URL = 'http://127.0.0.1:8000'

const Fishing = () => {
    const [fishData, setFishData] = useState([])
    const [activeFishSearch, setActiveFishSearch] = useState('')
    const [activeSearchBy, setActiveSearchBy] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //controls the filter toggling
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = (event) => {
        event.preventDefault()
        setDropdownOpen(prevState => !prevState);
    }

    const loadData = (url) => {
        setLoading(true)
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        if (activeFishSearch === '') {
            loadData(`${API_URL}/fish/?format=json`)
        } else {
            loadData(`${API_URL}/fish/?format=json&${activeSearchBy}=${activeFishSearch}`)
        }
    }, [activeFishSearch])

    //filters the fish based on user selection
    const filterFish = (event) => {
        event.preventDefault()
        setActiveFishSearch(event.target.name)
        setActiveSearchBy(event.target.value)
        console.log(event.target.name, event.target.value)
    }

    // mapping over the state and returning a tile
    const mappedFish = data.map((fish) => {
        return <FishTile
            fish={fish}
        />
    })

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <Button size='sm' onClick={() => {
                    setActiveFishSearch('')
                }}>Reset</Button>
                <DropdownToggle caret size='sm'>
                    Family
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem name='Salmon' value='family' onClick={filterFish}>Salmon</DropdownItem>
                    <DropdownItem name='Sunfish' value='family' onClick={filterFish}>Sunfish</DropdownItem>
                    <DropdownItem name='Pike' value='family' onClick={filterFish}>Pike</DropdownItem>
                    <DropdownItem name='Catfish' value='family' onClick={filterFish}>Catfish</DropdownItem>
                </DropdownMenu>
                <DropdownToggle caret size='sm'> Water type </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem name='Fresh' value='typeOfWater' onClick={filterFish}>Fresh</DropdownItem>
                    <DropdownItem name='Salt' value='typeOfWater' onClick={filterFish}>Salt</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <ul className='container'>
                {loading ? <Spinner animation="border" /> : mappedFish}
            </ul>
        </>
    );
}

export default Fishing;