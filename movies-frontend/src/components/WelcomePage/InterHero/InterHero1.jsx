import React from "react";
import Stack from 'react-bootstrap/Stack';
import { PiDevicesBold } from 'react-icons/pi';
import { IoIosPeople } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import Container from "react-bootstrap/esm/Container";
import { FaUsers } from "react-icons/fa";

function InterHero1(props){

    return(
        <Container fluid className={`container-fluid content-container ${props.className}`}>
            <h3 className={props.classname}>{props.text1}</h3>
            <Stack  className="share-icons" direction="horizontal" >
            <FaUsers icon="fa-solid fa-users" size="70px"/>
            </Stack> 
           
            <p>{props.text2}</p>
              
          </Container>
    )
}

export default InterHero1;