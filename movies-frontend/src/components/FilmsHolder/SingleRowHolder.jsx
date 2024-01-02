import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { usePagination } from "../Hooks/pagination.jsx"
import MovieCover from "../MovieCover.jsx";


/**
 * The `SingleRowHolder` component is a React component that displays a row of a movies list and
 * allows the user to navigate through different pages of movies.
 */
function SingleRowHolder(props) {

    // set initial page 
    let disabled_nextPageButton = useRef(false);
    let disabled_prevPageButton = useRef(true);
    const num_of_columns = useRef(6);
    let moviesArray = [];
    const category = props.category;
    let page = 0;
    // const url = `http://localhost:8080/movies/${props.category}?pageNo=${current_page.current}&pageSize=${columns_per_page}`;

    // const { data: movies, loading, error } = useFetchMovies(url);
    let { data: listOfMovies, loading, error, goToNextPage, goToPrevPage } = usePagination(category, num_of_columns);

    moviesArray = listOfMovies;



    /**
     * The function "handleNextPage" is used to handle the event of clicking 
     * on a button and then calling
     * the "goToNextPage" function with the category as a parameter.
     */
    function handleNextPage(event) {
        let category = event.target.name

        buttonsControl(page);
        goToNextPage(category, num_of_columns.current)
    }


    /**
     * The function "handlePrevPage" is used to handle the event of clicking
     *  on a button and then calling 
     * the goToPrevPage function with the category as a parameter.
     */
    function handlePrevPage() {
        buttonsControl(page);
        goToPrevPage(category)

    }


    /**
     * The function `buttonsControl` controls the disabled state of
     * the previous and next page buttons based on the current page number.
     */
    function buttonsControl(page) {
        // controls prevPage button
        if (page === 0) {
            disabled_prevPageButton.current = true;
        } else if (page > 0) {
            disabled_prevPageButton.current = false;
        }
        // controls nextPage button
        if (page === 9) {
            disabled_nextPageButton.current = true;
            console.log(disabled_nextPageButton);
        } else if (page < 9) {
            disabled_nextPageButton.current = false;
        }
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
                            {moviesArray.map((item, index) => {
                                console.log(item.name)
                                return <MovieCover key={index} img={item.poster_url} />
                            })
                            }
                        </Row>

                    </Stack>

                    {
                        // If page_count is 10, nextPage button will be disabled
                        disabled_nextPageButton.current === true ?
                            <button name={`${category}`} className="pagination-button" id="next-button" disabled title="Next page" aria-label="Next page"
                                onClick={(event) => handleNextPage(event)} >&gt;
                            </button>
                            :
                            <button name={`${category}`} className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                                onClick={(event) => handleNextPage(event)} >&gt;
                            </button>
                    }

                </nav>

            </Container>
        </Container>
    )
};

export default SingleRowHolder;