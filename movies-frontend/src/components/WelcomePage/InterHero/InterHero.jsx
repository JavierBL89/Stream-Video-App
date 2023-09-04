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
            text1="Up to 5 devices"
            text2=" Share with anyone you want" />
          : <InterHero2 
            className={props.className}
            text1="Weekly"
            text1ClassName="weeklyWord"
            text2="NEW CONTENT"
            text2ClassName="newContent"


            text3="Enjoy"
            text4="PREMIUM RELEASES"
            text3ClassName="enjoyWord"
             text4ClassName="premiumReleases"
            />
            }
        </Container>
    )
}

export default InterHero;