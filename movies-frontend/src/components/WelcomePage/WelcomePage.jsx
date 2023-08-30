import React from "react";
import Hero from "./Hero/Hero";
import InterHero from "./Hero/InterHero/InterHero";
import Container from 'react-bootstrap/Container';



function WelcomePage(){

    return (
        <Container fluid className="welcome-main-wraper">
          <Hero classContainer="hero-1"/>
          <InterHero className="interHero-1"/>
          <Hero classContainer="hero-2"/>
          <InterHero className="interHero-2"/>
        </Container>
    )
}

export default WelcomePage;



