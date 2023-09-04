import React from "react";
import Stack from 'react-bootstrap/Stack';
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";


function InterHero2(props){

    return(
        <Container fluid className={`container-fluid content-container ${props.className}`}>
        <Container fluid >
            <Row>
            <Col sm={12} lg={6}>
              <p className={props.text1ClassName}>{props.text1}</p>
              <p className={props.text2ClassName}>{props.text2}</p>
              </Col>
              
              <Col sm={12} lg={6}>
                <p className={props.text3ClassName}>{props.text3}</p>
                <p className={props.text4ClassName}>{props.text4}</p>
                </Col>
              </Row>
            <Row>
                <Col><h5>FilFilm</h5></Col>
            </Row>
            <Row>
                {/* <Button >SingUp</Button> */}
            </Row>
        </Container>
      </Container>
    )
}

export default InterHero2;