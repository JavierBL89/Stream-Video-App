import React from "react";
import Hero from "./Hero";
import InterHero from "./InterHero";


function WelcomePage(){

    return (
        <div className="container-fluid welcome-main-wraper">
        <Hero classContainer="hero-container hero-1"/>
          <InterHero className="container-fluid content-container container-1"/>
        <Hero classContainer="hero-container hero-2"/>
          <InterHero className="container-fluid content-container container-2"/>
        </div>
    )
}

export default WelcomePage;



