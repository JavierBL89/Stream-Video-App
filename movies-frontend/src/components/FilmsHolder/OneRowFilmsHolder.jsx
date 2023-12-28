import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { getNextPage, getPreviousPage, allMovies } from "../../scripts/fetchMoviesApi.js";

import MovieCover from "../MovieCover.jsx";


function OneRowFilmsHolder(props) {

    // set initial page 
    let current_page = useRef(0);
    let columns_per_page = useRef(6);
    let disabled_nextPageButton = useRef(false);
    let disabled_prevPageButton = useRef(true);
    let moviesArray = [];
    const [row, setRow] = useState([]);
    const holder = props.filmsHolder;
    let page = 0;
    columns_per_page = columns_per_page.current;


    // Make call to retrive data for the initial render state
    useEffect(() => {
        fetch(`http://localhost:8080/movies/all?pageNo=${current_page.current}&pageSize=${columns_per_page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(result => {
                setRow(result.slice(0, 6))
            });

        /*** After setting initial render state,
        * make call to fill the allMovies array in advance with data for next page of movies to render
        * It also will have the very same first sequence of movies as our component state
        ***/
        getNextPage(columns_per_page, current_page.current);
    }, [])

    /***
     * Function to get next sequence of movies
     */
    function nextPage() {
        current_page.current = current_page.current + 1;
        page = current_page.current;
        moviesArray = allMovies;
        setRow(moviesArray.slice(0, 6));
        buttonsControl(page);
        getNextPage(columns_per_page, page);
    }

    /***
     * Function to get the previous sequence of movies
     */
    function prevPage() {
        current_page.current = current_page.current - 1;
        page = current_page.current
        moviesArray = allMovies;
        setRow(moviesArray.slice(0, 6));
        buttonsControl(page);
        //prevent fetch page bellow number 0
        if (current_page.current >= 1) {
            getPreviousPage(columns_per_page, page);
        }
    }

    /**
     * Function to change the pagination buttons state accordingly
     ***/
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
            <Container fluid className={`filmsHolder-container ${holder}`} >
                <nav className="pagination-container">

                    {
                        disabled_prevPageButton.current === true ?
                            <button className="pagination-button" id="next-button" disabled title="Prev page" aria-label="Next page"
                            >&lt;
                            </button>
                            :
                            <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                                onClick={() => prevPage()} >&lt;
                            </button>
                    }                   <Stack direction="vertical">

                        <Row className="list1">
                            {row.map((item, index) => {
                                return <MovieCover key={index} img={item.poster_url} />
                            })
                            }
                        </Row>

                    </Stack>

                    {
                        // If page_count is 10, nextPage button will be disabled
                        disabled_nextPageButton.current === true ?
                            <button className="pagination-button" id="next-button" disabled title="Next page" aria-label="Next page"
                                onClick={() => nextPage()} >&gt;
                            </button>
                            :
                            <button className="pagination-button" id="next-button" title="Next page" aria-label="Next page"
                                onClick={() => nextPage()} >&gt;
                            </button>
                    }

                </nav>

            </Container>
        </Container>
    )
};

export default OneRowFilmsHolder;