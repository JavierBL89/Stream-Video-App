import React from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";



function Hero(props){

  const classContainer = props.classContainer;

  const hero1Html = ``

    return(
      <div>
          {props.classContainer === "hero-1" ? 
            <Hero1 classContainer={props.classContainer}/> 
            : 
            <Hero2 classContainer={props.classContainer}/>}
</div>
    )
};

export default Hero;