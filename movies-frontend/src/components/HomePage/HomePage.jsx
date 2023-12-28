import React from "react";
import AppNavbar from "../Navbar/AppNavbar";
import Container from "react-bootstrap/esm/Container";
import NavTab from "./NavTab";
import Footer from "../Footer/Footer";
import MySpace from "./MySpace/MySpace";
import Movies from "../Movies/Movies";
import Series from "./Series/Series";
import UpComing from "./UpComing/UpComing";

function HomePage() {

        return (
                <Container fluid className="homepage-wraper">
                        <AppNavbar />
                        <NavTab />

                        <Container fluid className="homepage-container" id="puta">
                                <MySpace />
                                <Movies />
                                <Series />
                                <UpComing />

                        </Container>
                        <Footer />
                </Container>
        )

};


export default HomePage;
