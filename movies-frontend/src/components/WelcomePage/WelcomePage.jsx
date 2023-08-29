import React from "react";
import Hero from "./Hero";
import InterHero from "./InterHero";
import Container from 'react-bootstrap/Container';



function WelcomePage(){

    return (
        <Container fluid className="welcome-main-wraper">
          <Hero classContainer="hero-container hero-1"/>
          <InterHero className="container-fluid content-container container-1"/>
          <Hero classContainer="hero-container hero-2"/>
          <InterHero className="container-fluid content-container container-2"/>
        </Container>
    )
}

export default WelcomePage;



