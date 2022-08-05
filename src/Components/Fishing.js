import { useState, useEffect } from 'react'
import FishTile from './FishTile'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

const Fishing = () => {
    const [fishData, setFishData] = useState([])
    const [reset, setReset] = useState(true)

    //controls the filter toggling
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = (event) => {
        event.preventDefault()
        console.log(event)
        setDropdownOpen(prevState => !prevState);
    }

    // endpoint for personal api
    // https://quiet-gorge-88095.herokuapp.com/fish/?format=json
    // this function makes the api call for all of the fish
    const getData = () => {
        fetch(`https://quiet-gorge-88095.herokuapp.com/fish/?format=json`)
            .then(response => response.json())
            .then(data => setFishData(data))
            .catch(() => console.log('Call failed'))
    }

    //Makes the api call for all the fish on filter reset of page load
    useEffect(() => {
        getData()
    }, [reset])

    //filters the fish based on user selection
    const filterFish = (event) => {
        event.preventDefault()
        // fishData.filter(arg => arg.includes)
        console.log('hit filter for ' + event.target.name)
    }

    //handles the reset filter button
    const handleReset = (event) => {
        event.preventDefault()
        getData()
    }

    // mapping over the state and returning a tile
    const mappedFish = fishData.map((fish) => {
        if (fish) {
            return <FishTile
                fish={fish}
            />
        }
    })

    console.log(fishData)

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <Button size='sm' onClick={handleReset}>Reset</Button>
                <DropdownToggle caret size='sm'>
                    Family
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem name='Salmon' onClick={filterFish}>Salmon</DropdownItem>
                    <DropdownItem name='Sunfish' onClick={filterFish}>Sunfish</DropdownItem>
                    <DropdownItem name='Pike' onClick={filterFish}>Pike</DropdownItem>
                    <DropdownItem name='Catfisih' onClick={filterFish}>Catfish</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <ul className='container'>
                {mappedFish}
            </ul>
        </>
    );
}

export default Fishing;