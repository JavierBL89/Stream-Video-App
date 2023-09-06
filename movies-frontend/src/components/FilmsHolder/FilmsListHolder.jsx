import React from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {displayList, paginatedList} from "../../scripts/pagination.js";

import putos from "./../../fakeMovies.js";
import MovieCover from "../MovieCover.jsx";

function FilmsHolder(props){
    const holder = props.filmsHolder;

    const allMoviesArray = putos;
    let moviesArray1 = [];
    let moviesArray2 = [];
    let columns_per_page = 6;
    let current_page = 1;

    const element = document.querySelector(".pagination-container");
    const element2 = document.querySelector(".container-list-1");

    
    for(let i=0;i <allMoviesArray.length;i++){
        if(allMoviesArray[i] %2 ===0){
            moviesArray1.push(allMoviesArray[i]);
        }else{
            moviesArray2.push(allMoviesArray[i]);
        }
    }
    

    function showRow (array){
        displayList(array, element, columns_per_page, current_page)

    }
    // displayList(moviesArray2, element2, columns_per_page, current_page)
    // let paginationLimit = allMoviesArray / 6;
    // moviesArray1 = [...allMoviesArray.slice(0, (allMoviesArray.length / 2))];

    
//  console.log(moviesArray1);
//  console.log(moviesArray2);
                         

    return (
        <Container className="filmsHolder-wraper">
            <Container className={`filmsHolder-container ${holder}`} > 
               <nav className="pagination-container">
               
                <button className="pagination-button" id="prev-button" title="Previous page" aria-label="Previous page"> &lt; </button>
                   <Row onload={showRow(moviesArray1)}>
                      { paginatedList.map((film, index) => {
                        console.log(paginatedList);

                        return <MovieCover key={index} img={film}/>
                      })}
                   </Row>
                   <Row onload={showRow(moviesArray2)}>
                      { paginatedList.map((film, index) => {
                        console.log(paginatedList);

                        return <MovieCover key={index} img={film}/>
                      })}
                   </Row>
  
                 <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page">
                  &gt;
                  </button>
                 </nav>
      
            </Container>
        </Container>
    )
};

export default FilmsHolder;