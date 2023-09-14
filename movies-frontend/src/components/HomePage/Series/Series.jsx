import React from "react";
import Container from "react-bootstrap/esm/Container";
import OneRowFilmHolder from "../../FilmsHolder/OneRowFilmsHolder";
import TwoRowFilmHolder from "../../FilmsHolder/TwoRowsFilmsHolder";
import SectionPerGender from "../SectionPerGender";



function Series(){

    return (
        <Container fluid className="series-wraper">
            <Container fluid className="series-container">
                <SectionPerGender title="popular" className="popularSeries" numberOfRows="1"/>
                <SectionPerGender title="english" className="englishSeries" numberOfRows="2"/>
                <SectionPerGender title="usa" className="usaSeries" numberOfRows="2"/>
            </Container>

        </Container>
    )
}

export default Series;