import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../HomePage/SectionPerGender";


function Movies() {

    return (
        <Container fluid className="movies-wraper hidden" id="movies">
            <Container fluid className="movies-container">
                <SectionPerGender title="trends" category="trends" className="trendMovies" numberOfRows="2" />
                <SectionPerGender title="action" category="action" className="actionMovies" numberOfRows="2" />
                <SectionPerGender title="drama" category="drama" className="dramaMovies" numberOfRows="2" />
                <SectionPerGender title="comedy" category="comedy" className="comedyMovies" numberOfRows="2" />
                <SectionPerGender title="romantic comedies" category="romantic comedies" className="romanticComedyMovies" numberOfRows="2" />
            </Container>
        </Container>
    )
}

export default Movies;