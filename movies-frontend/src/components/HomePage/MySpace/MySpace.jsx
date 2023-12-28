import React from "react";
import Container from "react-bootstrap/esm/Container";
import Presentation from "./Presentation/Presentation";
import H6 from "../../Headings/H6";
import OneRowFilmsHolder from "../../FilmsHolder/OneRowFilmsHolder";


function MySpace() {

    return (

        <Container fluid className="mySpace-warper" id="mySpace">
            <Container fluid className="mySpace-container">
                <Presentation />
                <H6 className="filmListName" text="Continue watching" />
                <OneRowFilmsHolder />
                <H6 text="Continue watching" />
                <OneRowFilmsHolder />
                <H6 text="My List" />
                <OneRowFilmsHolder />
                <H6 text="Top 10 last week" />
                <OneRowFilmsHolder />
                <H6 text="Based on your searches" />
                <OneRowFilmsHolder />
            </Container>
        </Container>
    )
}

export default MySpace;