import { useState } from "react";
import { useFetchMovies } from "./fetchMovies.jsx"

/**
 * The `usePagination` function is a custom React hook that manages pagination for different categories
 * of movies dinamically.
 * @returns The function `usePagination` returns an object
 *  with the following properties:
 **    { data, loading, error, goToNextPage, goToPrevPage };
 */
const usePagination = (categoryType, genreType, num_of_columns) => {
    let url;
    let category = categoryType;
    let genre = genreType;
    let columns = num_of_columns;
    console.log(genre);

    const [pages, setPages] = useState({ [genre]: { page: 0, columns_per_page: columns } });

    /**
     * The function `goToNextPage` updates the page number 
     * for a given category in a state variable called `pages`.
     */
    const goToNextPage = (listName, cols) => {
        setPages((prevState) => ({
            ...prevState,
            [listName]: {
                ...prevState[listName],
                page: prevState[listName].page + 1,
                columns_per_page: cols
            }
        }));
        category = listName;
        columns = cols;

    }

    /**
     * The function `goToPrevPage` updates the page number of 
     * a specific category in the state by decrementing it by 1.
     */
    const goToPrevPage = (listName, cols) => {
        setPages((prevState) => ({
            ...prevState,
            [listName]: {
                ...prevState[listName],
                page: prevState[listName].page - 1,
                columns_per_page: cols

            }

        }));
        category = listName;
        columns = cols;
    }

    /* The first code line is assigning the value of
    `pages[category]?.page` to the variable `current_page`. If `pages[category]?.page` is defined
    and not null, then `current_page` will be assigned that value. Otherwise, it will be assigned
    the value of 0. */
    let current_page = pages[genre]?.page ?? 0;
    let columns_per_page = pages[genre]?.columns_per_page ?? 6;
    url = `http://localhost:8080/${category}/${genre}?pageNo=${current_page}&pageSize=${columns_per_page}`;

    let { data, loading, error } = useFetchMovies(url);
    if (error) {
        console.log(error);

    }
    return { data, pages, loading, error, goToNextPage, goToPrevPage };

}

export { usePagination };