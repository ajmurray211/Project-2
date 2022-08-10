import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FishTile = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [style, setStyle] = useState(false)

    const defaultStyle = {
        backgroundImage: `url(${props.fish.imgMain})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '15vw',
        width: '40vw',
        opacity: style ? '.8' : '1',
    }

    return (
        <>
            <li className="Tile"
                style={defaultStyle}
                onMouseEnter={() => { setStyle(true) }}
                onMouseLeave={() => { setStyle(false) }}
            >
                <p>Name: {props.fish.name}</p>
                <Button onClick={toggle} style={{
                    opacity: style ? '1' : '0',
                    marginTop: '30px'
                }} >More information</Button>
            </li>

            <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                <ModalHeader toggle={toggle}>{props.fish.name}</ModalHeader>
                <ModalBody>
                    <p>Diet: {props.fish.diet}</p>
                    <p>Family: {props.fish.family}</p>
                    <p>Habitat: {props.fish.habitat}</p>
                    <p>Type of water: {props.fish.typeOfWater}</p>
                    <p>Breeding season: {props.fish.breedingSeason}</p>
                    <p>Average weight: {props.fish.avgWeight}</p>
                    <p>Average length: {props.fish.avgLength}</p>
                    <p>Average lifespan: {props.fish.avgLifespan}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default FishTile;


