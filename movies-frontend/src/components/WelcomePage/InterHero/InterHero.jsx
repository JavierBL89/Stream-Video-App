import React from "react";
import Container from 'react-bootstrap/Container';
import InterHero1 from "./InterHero1";
import InterHero2 from "./InterHero2";




function InterHero(props){

    return(
        <Container fluid className="interHero-container">
          {props.className === "interHero-1" ?
           <InterHero1 
            className={props.className}
            text="Up to 5 devices"
            title=" Share with anyone you want" />
          : <InterHero2 
            className={props.className}
            title="Because of you..." 
            text="and for you..."
            />
            }
        </Container>
    )
}

export default InterHero;