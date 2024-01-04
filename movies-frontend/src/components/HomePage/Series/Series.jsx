import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../SectionPerGender";



function Series() {

    return (
        <Container fluid className="series-wraper hidden" id="series">
            <Container fluid className="series-container">
                <SectionPerGender
                    listTitle="popular"
                    category="series"
                    genre="popular"
                    className="popularseries"
                    numberOfRows="1"

                />
                <SectionPerGender
                    listTitle="england"
                    category="series"
                    genre="eng"
                    className="englishSeries"
                    numberOfRows="2"

                />
                <SectionPerGender
                    listTitle="usa"
                    category="series"
                    genre="usa"
                    className="usaSeries"
                    numberOfRows="2"
                />
            </Container>

        </Container>
    )
}

export default Series;