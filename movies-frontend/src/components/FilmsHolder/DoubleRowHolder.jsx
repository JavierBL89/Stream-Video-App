import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { getNextPage, getPreviousPage } from "../../scripts/fetchMoviesApi.js";

import MovieCover from "../MovieCover.jsx";

function TwoRowsFilmsHolder(props) {

    // set initial page 
    let current_page = useRef(0);
    let columns_per_page = useRef(13);
    let disabled_nextPageButton = useRef(false);
    let disabled_prevPageButton = useRef(true);
    let moviesArray = [];
    const [row, setRow] = useState([]);
    const [row2, setRow2] = useState([]);
    const holder = props.listTitle;
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
                setRow(result.slice(0, 6));
                setRow2(result.slice(6, -1));
            })

        getNextPage(columns_per_page, current_page.current);
        console.log(props.category);

    }, [])

    /***
     * Function to get next sequence of movies to show
     */
    function nextPage() {
        current_page.current = current_page.current + 1;
        page = current_page.current;
        moviesArray = getNextPage(columns_per_page, page)
        setRow(moviesArray.slice(0, 6));
        setRow2(moviesArray.slice(6, -1));
        buttonsControl(page);
    }

    /***
   * Function to get next sequence of movies to show
   */
    function prevPage() {
        current_page.current = current_page.current - 1;
        page = current_page.current;
        moviesArray = getPreviousPage(columns_per_page, page)
        setRow(moviesArray.slice(0, 6));
        setRow2(moviesArray.slice(6, -1));
        buttonsControl(page);

    }

    /**
      * Function to change the pagination buttons state accordingly
      ***/
    function buttonsControl(page) {
        // controls prevPage button
        if (page === 0) {
            disabled_prevPageButton.current = true;
        } else if (page >= 1) {
            disabled_prevPageButton.current = false;
        }
        // controls nextPage button
        if (page === 9) {
            disabled_nextPageButton.current = true;
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
                        <Row className="list2">
                            {row2.map((item, index) => {
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

export default TwoRowsFilmsHolder;