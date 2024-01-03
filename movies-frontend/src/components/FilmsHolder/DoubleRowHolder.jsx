import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { usePagination } from "../Hooks/pagination.jsx"
import { buttonsController } from "../../scripts/buttonsController.js";

import MovieCover from "../MovieCover.jsx";

function DoubleRowHolder(props) {
    // set initial page 
    let disabled_nextPageButton = useRef(false);
    let disabled_prevPageButton = useRef(true);
    const num_of_columns = useRef(12);
    let moviesArray = [];
    let listCurrentPage;
    let category = props.category;

    /** Use the `usePagination` custom hook to destructure
     the returned values into separate variables. **/
    let { data: listOfMovies, pages, loading, error, goToNextPage, goToPrevPage } = usePagination(category, num_of_columns);
    moviesArray = listOfMovies;


    /**
    * The function "handleNextPage" is used to handle the event of clicking 
    * on a button and then calling
    * the "goToNextPage" function with the category as a parameter.
    */
    function handleNextPage(event) {
        let category = event.target.name
        listCurrentPage = pages[category].page;
        goToNextPage(category, num_of_columns.current)
        /* buttonsController is a function that returns an object with two
        properties for updating the incrementing and decrementing buttons state */
        const { newNextButtonState, newPrevButtonState } = buttonsController(listCurrentPage + 1);
        disabled_nextPageButton.current = newNextButtonState;
        disabled_prevPageButton.current = newPrevButtonState;
    }


    /**
     * The function "handlePrevPage" is used to handle the event of clicking
     *  on a button and then calling 
     * the goToPrevPage function with the category as a parameter.
     */
    function handlePrevPage(event) {
        let category = event.target.name;
        listCurrentPage = pages[category].page - 1;
        goToPrevPage(category);
        /* buttonsController is a function that returns an object with two
          properties for updating the incrementing and decrementing buttons state */
        const { newNextButtonState, newPrevButtonState } = buttonsController(listCurrentPage + 1);
        disabled_nextPageButton.current = newNextButtonState;
        disabled_prevPageButton.current = newPrevButtonState;
    }


    return (
        <Container fluid className="filmsHolder-wraper">
            <Container fluid className={`filmsHolder-container ${category}`} >
                <nav className="pagination-container">

                    {
                        disabled_prevPageButton.current === true ?
                            <button className="pagination-button" id="next-button" disabled title="Prev page" aria-label="Next page"
                            >&lt;
                            </button>
                            :
                            <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                                onClick={() => handlePrevPage()} >&lt;
                            </button>
                    }                   <Stack direction="vertical">

                        <Row className="list1">
                            {moviesArray.slice(0, 6).map((item, index) => {
                                return <MovieCover key={index} img={item.poster_url} />
                            })
                            }
                        </Row>
                        <Row className="list2">
                            {moviesArray.slice(7, 13).map((item, index) => {
                                return <MovieCover key={index} img={item.poster_url} />
                            })
                            }
                        </Row>
                    </Stack>

                    {/*** if array length is less than 6 display disabled button 
                   *** else enabled button ****/}
                    {
                        disabled_nextPageButton.current === true ?
                            <button className="pagination-button" id="next-button" disabled title="Next page" aria-label="Next page"
                                onClick={() => handleNextPage()} >&gt;
                            </button>
                            :
                            <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                                onClick={() => handleNextPage()} >&gt;
                            </button>
                    }

                </nav>

            </Container>
        </Container>
    )
};

export default DoubleRowHolder;