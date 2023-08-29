import React from "react";
import Container from 'react-bootstrap/Container';



function Hero(props){

    return(
      <div>
          <Container fluid className="hero-wraper">
            <Container fluid className={props.classContainer}></Container>
          </Container>
</div>
    )
};

export default Hero;