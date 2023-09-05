import React from "react";
import AppNavbar from "../Navbar/AppNavbar";
import Container from "react-bootstrap/esm/Container";
import SectionNavbar from "./NavTab";
import Presentation from "./NavTab";

function HomePage(){
    
        return(
            <Container fluid className="homePage-wraper">
              <AppNavbar/>
              <Container fluid className="homePage-wraper">
              <SectionNavbar />
              <Presentation/>
              </Container>
              </Container>
        )
    
};


export default HomePage;
