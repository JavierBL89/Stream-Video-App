import React from "react";
import AppNavbar from "../Navbar/AppNavbar";
import Container from "react-bootstrap/esm/Container";
import Presentation from "./Presentation/Presentation";
import NavTab from "./NavTab";
import FilmsHolder from "../FilmsHolder/FilmsListHolder";

function HomePage(){
    
        return(
            <Container fluid className="homepage-wraper">
              <AppNavbar/>
              <NavTab />
              <Presentation/>
              <FilmsHolder ></FilmsHolder>
              </Container>
        )
    
};


export default HomePage;
