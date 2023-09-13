import React from "react";
import AppNavbar from "../Navbar/AppNavbar";
import Container from "react-bootstrap/esm/Container";
import Presentation from "./Presentation/Presentation";
import NavTab from "./NavTab";
import FilmsHolder from "../FilmsHolder/TwoRowsFilmsHolder";
import H6 from "../Headings/H6";
import Footer from "../Footer/Footer";
import OneRowFilmsHolder from "../FilmsHolder/OneRowFilmsHolder";

function HomePage(){
    
        return(
            <Container fluid className="homepage-wraper">
            <AppNavbar/>
            
            <Container fluid className="homepage-container">
              
              <NavTab />
              <Presentation/>
              <H6 className="filmListName" text="Continue watching"/>
              <OneRowFilmsHolder />
              <H6 text="Continue watching"/>
              <OneRowFilmsHolder />
              <H6 text="My List"/>
              <OneRowFilmsHolder />
              <H6 text="Top 10 last week"/>
              <OneRowFilmsHolder />
              <H6 text="Based on your searches"/>
              <OneRowFilmsHolder />
             </Container>
             <Footer/>
              </Container>
        )
    
};


export default HomePage;
