import React from "react";
import Container from 'react-bootstrap/Container';
import H1 from "../../Headings/H1";
import H2 from "../../Headings/H2";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "../../Image";






function Hero2(props){


    return(
      <div>
          <Container fluid className="hero-wraper">
            <Container fluid className={`hero-container ${props.classContainer}`}>
            <Row>
              <Col>
                <p className="everywhere-heading"><span id="fword">Stream</span> everywhere</p>
                <p className="everywhere-text">at anytime!</p>
              </Col>
              <Col>
                 <Container className="everywhere-container-images">
                   <Container className="container-img1">
                   </Container>
                   <Container className="container-img2">
                   </Container>
                  <Container className="container-img3">
                  </Container> 
                  </Container> 
                </Col>
            </Row>
            </Container>            
          </Container>
</div>
    )
};

export default Hero2;