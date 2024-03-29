import { useState, useEffect, useReducer } from 'react'
import FishTile from './FishTile'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Spinner } from 'reactstrap';
import useFetch from './useFetch';
import axios from 'axios'
import searchIcon from '../Components/images/search_icon.png'
import fishingData from './data/fishing/fishingData.js';


const API_URL = 'https://quiet-gorge-88095.herokuapp.com'
// const API_URL = 'http://127.0.0.1:8000'

const Fishing = () => {
    const [activeFishSearch, setActiveFishSearch] = useState('')
    const [activeSearchBy, setActiveSearchBy] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchVal, setSearchVal] = useState('')

    //controls the filter toggling
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = (event) => {
        event.preventDefault()
        console.log(event.target)
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
        // if (activeFishSearch === '') {
        //     loadData(`${API_URL}/fish/?format=json`)
        // } else {
        //     loadData(`${API_URL}/fish/?format=json&${activeSearchBy}=${activeFishSearch}`)
        // }
        setData(fishingData)
    }, [activeFishSearch])

    //filters the fish based on user selection
    const filterFish = (event) => {
        event.preventDefault()
        setActiveFishSearch(event.target.name)
        setActiveSearchBy(event.target.value)
    }

    // mapping over the state and returning a tile
    const mappedFish = data.map((fish) => {
        return <FishTile
            fish={fish}
        />
    })

    const handleChange = (event) => {
        event.preventDefault()
        setActiveSearchBy('name')
        setSearchVal(event.target.value)
    }

    return (
        <>
            <div className="d-flex p-5 justify-content-center">
                <Button color='dark' className='me-2' onClick={() => {
                    setActiveFishSearch('')
                }}> Reset </Button>
                <UncontrolledDropdown className="me-2">
                    <DropdownToggle color='dark' caret>Family</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem name='Salmon' value='family' onClick={filterFish} > Salmon </DropdownItem>
                        <DropdownItem name='Sunfish' value='family' onClick={filterFish} > Sunfish </DropdownItem>
                        <DropdownItem name='Pike' value='family' onClick={filterFish} > Pike </DropdownItem>
                        <DropdownItem name='Catfish' value='family' onClick={filterFish} > Catfish </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown className="me-2" >
                    <DropdownToggle color='dark' caret> Water type</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem name='Fresh' value='typeOfWater' onClick={filterFish}> Fresh </DropdownItem>
                        <DropdownItem name='Salt' value='typeOfWater' onClick={filterFish}> Salt </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <form className='search_box_wrap' onSubmit={() => setActiveFishSearch(searchVal)} >
                    <div className='search_box'>
                        <input onChange={handleChange} id='searchbox' className='input_search' type='text' placeholder="Search for a fish by name" />
                    </div>
                    <div className='search_btn'>
                        <span className='icon'>
                            <Button type='submit' color='light'><img src={searchIcon} /></Button>
                        </span>
                    </div>
                </form>

            </div>

            <ul className='container'>
                {loading ? <Spinner animation="border" /> : mappedFish}
            </ul>
        </>
    );
}

export default Fishing;