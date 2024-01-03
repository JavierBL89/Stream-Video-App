import { useEffect, useState } from "react";
import { useFetchMovies } from "./fetchMovies.jsx"

/**
 * The `usePagination` function is a custom React hook that manages pagination for different categories
 * of movies dinamically.
 * @returns The function `usePagination` returns an object
 *  with the following properties:
 **    { data, loading, error, goToNextPage, goToPrevPage };
 */
const usePagination = (listType, num_of_columns) => {
    let url;
    let category = listType;
    let columns = num_of_columns;

    const [pages, setPages] = useState({ [category]: { page: 0, columns_per_page: columns } });


    /**
     * The function `goToNextPage` updates the page number 
     * for a given category in a state variable called `pages`.
     */
    const goToNextPage = (listName, cols) => {
        category = listName;
        columns = cols;
        setPages((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                page: prevState[category].page + 1,
                columns_per_page: columns
            }
        }));

    }

    /**
     * The function `goToPrevPage` updates the page number of 
     * a specific category in the state by decrementing it by 1.
     */
    const goToPrevPage = (listName) => {
        console.log(listName);
        category = listName;
        console.log(category);
        setPages((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                page: prevState[category].page - 1
            }

        }));
    }

    /* The first code line is assigning the value of
    `pages[category]?.page` to the variable `current_page`. If `pages[category]?.page` is defined
    and not null, then `current_page` will be assigned that value. Otherwise, it will be assigned
    the value of 0. */
    let current_page = pages[category]?.page ?? 0;
    let columns_per_page = pages[category]?.columns_per_page ?? 6;
    console.log();
    url = `http://localhost:8080/movies/${category}?pageNo=${current_page}&pageSize=${columns_per_page}`;

    let { data, loading, error } = useFetchMovies(url);

    return { data, pages, loading, error, goToNextPage, goToPrevPage };

}

export { usePagination };