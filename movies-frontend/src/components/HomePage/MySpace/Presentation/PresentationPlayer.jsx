import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Mediaplayer from "../../../MediaPlayer";

function PresentationPlayer(props){

    return (
        <Container className="presentation-player-container">
          <Row className={props.className} >
            <Col lg={6}>
                <Mediaplayer className="media-player-1"/>
            </Col>
            <Col lg={6}>
               <Mediaplayer className="media-player-2"/>

            </Col>
          </Row>

        </Container>
    )
}

export default PresentationPlayer;