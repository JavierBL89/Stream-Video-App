import React from "react";
import Container from 'react-bootstrap/Container';


function InterHero(props){

    return(
        <Container fluid className="interHero-container">
          <Container fluid className={props.className}>
            <h6>Share with anyone you want</h6>
          </Container>

        </Container>
    )
}

export default InterHero;