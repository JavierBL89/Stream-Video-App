import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../HomePage/SectionPerGender";


function Movies() {

    return (
        <Container fluid className="movies-wraper hidden" id="movies">
            <Container fluid className="movies-container">
                <SectionPerGender
                    listTitle="trends"
                    category="movies"
                    genre="trends"
                    className="trendMovies"
                    numberOfRows="2"
                />
                <SectionPerGender
                    listTitle="action"
                    category="movies"
                    genre="action"
                    className="actionMovies"
                    numberOfRows="2"

                />
                <SectionPerGender
                    listTitle="drama"
                    category="movies"
                    genre="drama"
                    className="dramaMovies"
                    numberOfRows="2"
                />
                <SectionPerGender
                    listTitle="comedy"
                    category="movies"
                    genre="comedy"
                    className="comedyMovies"
                    numberOfRows="2"
                />
                <SectionPerGender
                    listTitle="romance"
                    category="movies"
                    genre="romance"
                    className="romanceMovies"
                    numberOfRows="2"

                />
            </Container>
        </Container>
    )
}

export default Movies;