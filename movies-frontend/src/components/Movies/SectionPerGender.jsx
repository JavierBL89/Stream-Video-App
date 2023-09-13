import React from "react";
import Container from "react-bootstrap/esm/Container";
import H5 from "../Headings/H5";
import TwoRowsFilmsHolder from "../FilmsHolder/TwoRowsFilmsHolder";

function SectionPerGender(props){

    return (
        <Container fluid className={`section-container ${props.classname}`}>
          <H5 text={props.title}/>
          <TwoRowsFilmsHolder filmsHolder={props.title}/>
        </Container>
    )
}

export default SectionPerGender;