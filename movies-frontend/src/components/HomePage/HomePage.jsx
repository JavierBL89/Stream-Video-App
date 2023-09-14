import React from "react";
import AppNavbar from "../Navbar/AppNavbar";
import Container from "react-bootstrap/esm/Container";
import NavTab from "./NavTab";
import Footer from "../Footer/Footer";
import MySpace from "./MySpace/MySpace";
import Movies from "../Movies/Movies";
import Series from "./Series/Series";

function HomePage(){
    
        return(
            <Container fluid className="homepage-wraper">
            <AppNavbar/>
            <Container fluid className="homepage-container">
              <NavTab />
              {/* <MySpace/> */}
              {/* <Movies/> */}
              <Series />

             </Container>
             <Footer/>
              </Container>
        )
    
};


export default HomePage;
