import React from "react";
import Container from 'react-bootstrap/Container';
import H1 from "../../Headings/H1";
import H2 from "../../Headings/H2";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";





function Hero2(props){


    return(
      <div>
          <Container fluid className="hero-wraper">
            <Container fluid className={`hero-container ${props.classContainer}`}>
            <Row>
              <Col>
                <p className="everywhere-heading">Stream everywhere</p>
                <p className="everywhere-text">at anytime!</p></Col>
              <Col>
                 <Container className="everywhere-container-images">
                 <Container className="everywhere-img1"/>
                 <Container className="everywhere-img2"/>
                 <Container className="everywhere-img3"/>
                 </Container>
                </Col>
            </Row>
            </Container>            
          </Container>
</div>
    )
};

export default Hero2;