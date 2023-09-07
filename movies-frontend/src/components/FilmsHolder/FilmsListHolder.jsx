import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {displayList, paginatedList} from "../../scripts/pagination.js";

import putos from "./../../fakeMovies.js";
import MovieCover from "../MovieCover.jsx";

function FilmsHolder(props){
    const holder = props.filmsHolder;

    // const [row, setRow] = useState (paginatedList);
    // const [row2, setRow2] = useState ([]);

    const allMoviesArray = putos;
    let moviesArray1 = [];
    let moviesArray2 = [];
    let columns_per_page = 6;
    let current_page = 0;

   
    for(let i=0;i <allMoviesArray.length;i++){
        if(allMoviesArray[i] %2 ===0){
            moviesArray1.push(allMoviesArray[i]);
        }else{
            moviesArray2.push(allMoviesArray[i]);
        }
    }
    
  
    
    function showRow1 (array, page){
        // let nextPage = current_page + 1;
    //    let initialRow = displayList(array, columns_per_page, page)
    //    setRow(initialRow);

     displayList(array, columns_per_page, page)
    }

   
    return (
        <Container className="filmsHolder-wraper">
            <Container className={`filmsHolder-container ${holder}`} > 
               <nav className="pagination-container">
               
                <button className="pagination-button" id="prev-button" title="Previous page" aria-label="Previous page"> &lt; </button>
                   <Stack direction="vertical">
                     <Row onload={showRow1(moviesArray1, current_page)}>
                        { paginatedList.map((film, index) => {
                            {/* console.log(row); */}

                             return <MovieCover key={index} img={film}/>
                            })
                        }
                     </Row>
                     <Row >
                        
                     </Row>
                   </Stack>
                   
  
                 <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                   >
                  &gt;
                  </button>
                 </nav>
      
            </Container>
        </Container>
    )
};

export default FilmsHolder;