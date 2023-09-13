import React, { useState, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { displayList, moviesArrayPaginated1, moviesArrayPaginated2, disabled} from "../../scripts/pagination.js";

import MovieCover from "../MovieCover.jsx";

function FilmsHolder(props){

    // set initial page 
    let current_page = useRef(0);
  //  let disabled= useRef(true);
    /* I'm using 2 different arrays to create 2 rows to display 
    * since I dont know how to make 2 rows with 6 columns from the same array
    */
    const [row, setRow] = useState (moviesArrayPaginated1);
    const [row2, setRow2] = useState (moviesArrayPaginated2);

    const holder = props.filmsHolder;
    let page = 0;
    let columns_per_page = 6;
    let disabledButton = disabled;
     
    /** 
     * Function to get the inital sequence of items of the first row
     */
    function showRow1 (listName, current_page){
        current_page = current_page.current;
        displayList(listName, columns_per_page, current_page)
    }

    /** 
     * Function to get the inital sequence of items of the second row
     */
    function showRow2 (listName, current_page){
        current_page = current_page.current;
       displayList(listName, columns_per_page, current_page)
    }

    /***
     * Function to get next sequence of movies to show
     */
    function nextPage(){
       current_page.current = current_page.current + 1;
       page = current_page.current
       displayList("list1", columns_per_page, page);
       displayList("list2", columns_per_page, page );

       setRow(moviesArrayPaginated1);
       setRow2(moviesArrayPaginated2);

    }

    function prevPage(){
        if (current_page.current > 0) {
            current_page.current = current_page.current - 1;
            page = current_page.current
            displayList("list1", columns_per_page, page);
            displayList("list2", columns_per_page, page );
     
            setRow(moviesArrayPaginated1);
            setRow2(moviesArrayPaginated2);
        }

    }
    
   
    return (
        <Container className="filmsHolder-wraper">
            <Container className={`filmsHolder-container ${holder}`} > 
               <nav className="pagination-container">
               
               {
                disabledButton === true ?  
                      <button className="pagination-button" id="next-button"  disabled title="Prev page" aria-label="Next page"
                         >&lt;
                      </button>
                    : 
                       <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                            onClick={() =>prevPage()} >&lt;
                      </button>
                  }                   <Stack direction="vertical">
                     
                     <Row onload={showRow1("list1", current_page)} className="list1">
                     { row.map((item, index) => {
                             return <MovieCover key={index} img={item}/>
                            })
                        }
                     </Row>
                     <Row onload={showRow2("list2", current_page)} className="list2">
                     { row2.map((item, index) => {
                             return <MovieCover key={index} img={item}/>
                            })
                        }
                     </Row>
                   </Stack>
                   
                   {/*** if array length is less than 6 display disabled button 
                   *** else enabled button ****/}
                   {
                    row.length < 6 ?  
                      <button className="pagination-button" id="next-button" disabled title="Next page" aria-label="Next page"
                            onClick={() =>nextPage()} >&gt;
                      </button>
                    : 
                       <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                            onClick={() =>nextPage()} >&gt;
                      </button>
                  }
                   
                 </nav>
      
            </Container>
        </Container>
    )
};

export default FilmsHolder;