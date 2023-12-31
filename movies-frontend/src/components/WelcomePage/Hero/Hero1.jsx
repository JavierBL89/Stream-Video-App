import React from "react";
import Container from 'react-bootstrap/Container';
import H1 from "../../Headings/H1";
import H2 from "../../Headings/H2";
import Button from "react-bootstrap/esm/Button";



function Hero1(props){



    return(
      <div>
          <Container fluid className="hero-wraper">
            <Container fluid className={`d-none d-lg-block hero-container ${props.classContainer}`}>
              <H1 className="call-to-action-heading"
                text="Enjoy unlimited content!"/>
              <H2 className="call-to-action-text"
                 text="films, series, tv programs and more"/>
                 <Container className="call-to-action">
                   <p>START NOW!</p>
                   <Button variant="primary">Sign Up</Button>
                 </Container>
            </Container>
            <Container fluid className={`d-block d-lg-none d-lg-none hero-container ${props.classContainer}`}>
              <H1 className="call-to-action-heading1"
                text="Enjoy"/>
                <H1 className="call-to-action-heading2"
                text="unlimited"/>
                <H1 className="call-to-action-heading3"
                text="content!"/>
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

export default Hero1;