import React from "react";
import Container from "react-bootstrap/esm/Container";


function MovieCover(props){

    return (
        <Container className="film-cover-img">{props.img}</Container>

    )
}

export default MovieCover;