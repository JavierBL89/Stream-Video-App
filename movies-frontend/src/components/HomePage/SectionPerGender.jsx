import React from "react";
import Container from "react-bootstrap/esm/Container";
import H5 from "../Headings/H5";
import TwoRowsFilmsHolder from "../FilmsHolder/TwoRowsFilmsHolder";
import OneRowFilmsHolder from "../FilmsHolder/OneRowFilmsHolder";

function SectionPerGender(props){

  const numberOfRows = props.numberOfRows;

    return (
      
        <Container fluid className={`section-container ${props.classname}-container`}>
          <H5 text={props.title}/>
          {
           numberOfRows === "2" ? 
          <TwoRowsFilmsHolder filmsHolder={props.title}/>
          :
          <OneRowFilmsHolder filmsHolder={props.title}/>
          }
        </Container>

    )
}

export default SectionPerGender;