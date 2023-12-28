import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../SectionPerGender";

function UpComing() {

    return (
        <Container fluid className="upcoming-wraper hidden" id="upcoming">
            <Container fluid className="upcoming-container">
                <SectionPerGender title="next week" className="upNextWeek" numberOfRows="1" />
                <SectionPerGender title="from england" className="engUpComing" numberOfRows="1" />
                <SectionPerGender title="from usa" className="usaUpComing" numberOfRows="1" />
            </Container>
        </Container>
    )
}

export default UpComing;