import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../HomePage/SectionPerGender";


function Movies() {

    return (
        <Container fluid className="movies-wraper hidden" id="movies">
            <Container fluid className="movies-container">
                <SectionPerGender
                    listTitle="trends"
                    category="trends"
                    className="trendMovies"
                    numberOfRows="2"
                />
                <SectionPerGender
                    listTitle="action"
                    category="action"
                    className="actionMovies"
                    numberOfRows="2"

                />
                <SectionPerGender
                    listTitle="drama"
                    category="drama"
                    className="dramaMovies"
                    numberOfRows="2"
                />
                <SectionPerGender
                    listTitle="comedy"
                    category="comedy"
                    className="comedyMovies"
                    numberOfRows="2"
                />
                <SectionPerGender
                    listTitle="romance"
                    category="romance"
                    className="romanceMovies"
                    numberOfRows="2"

                />
            </Container>
        </Container>
    )
}

export default Movies;