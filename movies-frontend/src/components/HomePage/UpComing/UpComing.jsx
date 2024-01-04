import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionPerGender from "../SectionPerGender";

function UpComing() {

    return (
        <Container fluid className="upcoming-wraper hidden" id="upcoming">
            <Container fluid className="upcoming-container">
                <SectionPerGender
                    listTitle="next week"
                    category="nextWeek"
                    genre="nextweek"
                    className="upNextWeek"
                    numberOfRows="1"

                />
                <SectionPerGender
                    listTitle="from england"
                    category="upcomming"
                    genre="eng"
                    className="engUpComing"
                    numberOfRows="1"

                />
                <SectionPerGender
                    listTitle="from usa"
                    category="upcoming"
                    genre="usa"
                    className="usaUpComing"
                    numberOfRows="1"
                />
            </Container>
        </Container>
    )
}

export default UpComing;