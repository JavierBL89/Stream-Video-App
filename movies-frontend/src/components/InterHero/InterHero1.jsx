import React from "react";
import Stack from 'react-bootstrap/Stack';
import { PiDevicesBold } from 'react-icons/pi';
import { IoIosPeople } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import Container from "react-bootstrap/esm/Container";

function InterHero1(props){

    return(
        <Container fluid className={`container-fluid content-container ${props.className}`}>
            <h3 className={props.classname}>{props.title}</h3>
            <p>{props.text}</p>
              <Stack  className="share-icons" direction="horizontal" >
                <PiDevicesBold fontSize="4rem"/>
                {/* <HiHome fontSize="3rem"/> */}
                <IoIosPeople fontSize="4.5rem"/>
              </Stack> 
          </Container>
    )
}

export default InterHero1;