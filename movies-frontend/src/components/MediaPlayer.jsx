import React from "react";
import Container from "react-bootstrap/esm/Container";


function Mediaplayer(props){

    const customPlayer = props.className;

    return(
        <Container className={`media-player-container ${customPlayer}`}>

        </Container>
    )
}

export default Mediaplayer;