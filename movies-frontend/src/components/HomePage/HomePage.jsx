import React from "react";
import AppNavbar from "../Navbar/AppNavbar";
import Container from "react-bootstrap/esm/Container";
import SectionNavbar from "./NavTab";

function HomePage(){
    
        return(
            <Container fluid className="homePage-wraper">
              <AppNavbar/>
              <Container fluid className="homePage-wraper"></Container>
              <SectionNavbar />
              </Container>
        )
    
};


export default HomePage;
