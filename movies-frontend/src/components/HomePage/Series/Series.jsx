import React from "react";
import Container from "react-bootstrap/esm/Container";
import OneRowFilmHolder from "../../FilmsHolder/SingleRowHolder";
import TwoRowFilmHolder from "../../FilmsHolder/DoubleRowHolder";
import SectionPerGender from "../SectionPerGender";



function Series() {

    return (
        <Container fluid className="series-wraper hidden" id="series">
            <Container fluid className="series-container">
                <SectionPerGender title="popular" className="popularSeries" numberOfRows="1" />
                <SectionPerGender title="english" className="englishSeries" numberOfRows="2" />
                <SectionPerGender title="usa" className="usaSeries" numberOfRows="2" />
            </Container>

        </Container>
    )
}

export default Series;