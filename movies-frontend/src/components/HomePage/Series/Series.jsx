import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../SectionPerGender";



function Series() {

    return (
        <Container fluid className="series-wraper hidden" id="series">
            <Container fluid className="series-container">
                <SectionPerGender
                    listTitle="popular"
                    category="popular series"
                    className="popularSeries"
                    numberOfRows="1"

                />
                <SectionPerGender
                    listTitle="england"
                    category="eng series"
                    className="englishSeries"
                    numberOfRows="2"

                />
                <SectionPerGender
                    listTitle="usa"
                    category="usa series"
                    className="usaSeries"
                    numberOfRows="2"
                />
            </Container>

        </Container>
    )
}

export default Series;