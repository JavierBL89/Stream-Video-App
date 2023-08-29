import React from "react";


function InterHero(props){

    return(
        <div className="container-fluid interHero-container">
          <div className={props.className}>
            <h6>Share with anyone you want</h6>
          </div>

        </div>
    )
}

export default InterHero;