import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const HuntingTile = (props) => {

    const [style, setStyle] = useState(false)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const defaultStyle = {
        backgroundImage: `url(${props.animal.imgMain})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '300px',
        width: '350px',
        opacity: style ? '.9' : '1',
    }

    return (
        <>
            <li className="Tile"
                style={defaultStyle}
                onMouseEnter={() => { setStyle(true) }}
                onMouseLeave={() => { setStyle(false) }}
            >
                <p className="text">Name: {props.animal.name}</p>
                <Button className="infoBtn" style={{
                    opacity: style ? '1' : '0',
                    marginTop:'100px'
                }} onClick={toggle}>More information</Button>
            </li>

            <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                <ModalHeader toggle={toggle}>{props.animal.name}</ModalHeader>
                <ModalBody>
                    <p>Diet: {props.animal.diet}</p>
                    <p>Family: {props.animal.family}</p>
                    <p>Habitat: {props.animal.habitat}</p>
                    <p>Breeding season: {props.animal.breedingSeason}</p>
                    <p>Average weight: {props.animal.avgWeight}</p>
                    <p>Average length: {props.animal.avgLength}</p>
                    <p>Average lifespan: {props.animal.avgLifespan}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default HuntingTile;