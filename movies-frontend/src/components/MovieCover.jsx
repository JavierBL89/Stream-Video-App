import React from "react";
import Container from "react-bootstrap/esm/Container";


function MovieCover(props){

    return (
        <Container fluid className="film-cover-img">
        <img src={props.img} className="movieImg"/>
        </Container>

    )
}

export default MovieCover;