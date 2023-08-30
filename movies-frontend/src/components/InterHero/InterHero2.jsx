import React from "react";
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";


function InterHero2(props){

    return(
        <Container fluid className={`container-fluid content-container ${props.className}`}>
        <Container >
            <Row><p className={props.classname}>{props.title}</p></Row>
            <Row>
                <Col><p>{props.text}</p></Col>
                <Col><h5>FilFilm</h5></Col>
            </Row>
            <Row>
                <Button >SingUp</Button>
            </Row>
        </Container>
      </Container>
    )
}

export default InterHero2;