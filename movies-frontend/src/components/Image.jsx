import React from "react";

function Image(props){

    return (
       <img src={props.src} className={props.className} alt={props.imgName}/>
    )
};

export default Image;