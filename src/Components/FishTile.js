import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const FishTile = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <li className="Tile">
                <img src={props.fish.imgMain} alt={props.fish.name} />
                <p>Name: {props.fish.name}</p>
                <Button onClick={toggle}>More information</Button>
            </li>

            <Modal isOpen={modal} toggle={toggle} centered={true} fullscreen="xl" size="xl">
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


