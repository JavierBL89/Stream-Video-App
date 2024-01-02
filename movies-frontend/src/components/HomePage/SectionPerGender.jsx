import React from "react";
import Container from "react-bootstrap/esm/Container";
import H5 from "../Headings/H5";
import DoubleRowHolder from "../FilmsHolder/DoubleRowHolder";
import SingleRowHolder from "../FilmsHolder/SingleRowHolder";

function SectionPerGender(props) {

  const numberOfRows = props.numberOfRows;

  return (

    <Container fluid className={`section-container ${props.classname}-container`}>
      <H5 text={props.listTitle} />
      {
        numberOfRows === "2" ?
          <DoubleRowHolder listTitle={props.listTitle} category={props.category} />
          :
          <SingleRowHolder listTitle={props.listTitle} category={props.category} />
      }
    </Container>

  )
}

export default SectionPerGender;