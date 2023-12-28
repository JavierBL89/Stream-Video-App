import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import showSection from "../../scripts/navigationTab";

function NavTab() {
    return (
        <Container fluid className="navTab-wraper">
            <Container fluid className="navTab-container d-flex">
                <Nav activeKey="/mySpace" id="navTab"
                    onSelect={(selectedKey) => showSection(selectedKey)}>
                    <Nav.Item>
                        <Nav.Link eventKey="mySpace">My Space</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="movies">Movies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="series">Series</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="upcoming">Upcoming</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Container>

        </Container>
    )
};

export default NavTab;