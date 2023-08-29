import React from "react";
import Container from 'react-bootstrap/Container';
import H1 from "../Headings/H1";
import H2 from "../Headings/H2";
import Button from "react-bootstrap/esm/Button";



function Hero(props){

  const classContainer = props.classContainer;

    return(
      <div>
          <Container fluid className="hero-wraper">
            <Container fluid className={props.classContainer}>
              <H1 className="call-to-action-heading"
                text="Enjoy unlimited content!"/>
              <H2 className="call-to-action-text"
                 text="films, series, tv programs and more"/>
                 <Container className="call-to-action">
                   <p>START NOW!</p>
                   <Button variant="primary">Sign Up</Button>
                 </Container>
            </Container>
          </Container>
</div>
    )
};

export default Hero;