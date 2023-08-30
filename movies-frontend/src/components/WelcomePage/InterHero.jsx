import React from "react";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { PiDevicesBold } from 'react-icons/pi';
import { IoIosPeople } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';



function InterHero(props){

    return(
        <Container fluid className="interHero-container">
          <Container fluid className={`container-fluid content-container ${props.className}`}>
            <h3 className={props.classname}>{props.title}</h3>
            <p>{props.text}</p>
            {/*** Render if condition ****/}
            {props.className === "interHero-1" ? 
              <Stack  className="share-icons" direction="horizontal" >
                <PiDevicesBold fontSize="4rem"/>
                {/* <HiHome fontSize="3rem"/> */}
                <IoIosPeople fontSize="4.5rem"/>
              </Stack> : null
            }
          </Container>

        </Container>
    )
}

export default InterHero;