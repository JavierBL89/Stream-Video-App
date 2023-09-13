import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "./SectionPerGender";


function Movies (){

    return (
        <Container fluid className="movies-wraper">
            <Container fluid className="movies-container">
               <SectionPerGender title="puta" className="puta"/>
            </Container>
        </Container>
    )
}

export default Movies;