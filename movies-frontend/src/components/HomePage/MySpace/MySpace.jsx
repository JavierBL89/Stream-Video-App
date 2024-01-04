import React from "react";
import Container from "react-bootstrap/esm/Container";
import Presentation from "./Presentation/Presentation";
import H6 from "../../Headings/H6";
import SingleRowHolder from "../../FilmsHolder/SingleRowHolder";


function MySpace() {

    return (

        <Container fluid className="mySpace-warper" id="mySpace">
            <Container fluid className="mySpace-container">
                <Presentation />
                <H6 className="" text="Continue watching" />
                <SingleRowHolder category="myspace" genre="continuewatching" />
                <H6 text="My List" />
                <SingleRowHolder category="myspace" genre="mylist" />
                <H6 text="Top 20 last week" />
                <SingleRowHolder category="myspace" genre="top20" />
                <H6 text="Based on your searches" />
                <SingleRowHolder category="myspace" genre="basedon" />
            </Container>
        </Container>
    )
}

export default MySpace;