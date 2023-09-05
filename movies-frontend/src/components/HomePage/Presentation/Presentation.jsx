import React from "react";
import Container from "react-bootstrap/esm/Container";
import PresentationPlayer from "./PresentationPlayer";


function Presentation(){

    return (
        <Container fluid className="presentation-wraper">
          <Container fluid className="presentation-container">
            <PresentationPlayer/>
          </Container>
        </Container>

    )
}
export default Presentation;