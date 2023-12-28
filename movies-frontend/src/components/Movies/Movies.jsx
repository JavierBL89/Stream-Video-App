import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../HomePage/SectionPerGender";


function Movies() {

    return (
        <Container fluid className="movies-wraper hidden" id="movies">
            <Container fluid className="movies-container">
                <SectionPerGender title="trends" className="trendMovies" numberOfRows="2" />
                <SectionPerGender title="action" className="actionMovies" numberOfRows="2" />
                <SectionPerGender title="drama" className="dramaMovies" numberOfRows="2" />
                <SectionPerGender title="comedy" className="comedyMovies" numberOfRows="2" />
                <SectionPerGender title="romantic comedies" className="romanticComedyMovies" numberOfRows="2" />
            </Container>
        </Container>
    )
}

export default Movies;