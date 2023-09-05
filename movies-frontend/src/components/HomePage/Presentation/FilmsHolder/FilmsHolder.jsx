import React from "react";
import Container from "react-bootstrap/esm/Container";

function FilmsHolder(props){
    const holder = props.filmsHolder;

    return (
        <Container className="filmsHolder-wraper">
            <Container className={`filmsHolder-container ${holder}`} > 
            
            </Container>
        </Container>
    )
};

export default FilmsHolder;