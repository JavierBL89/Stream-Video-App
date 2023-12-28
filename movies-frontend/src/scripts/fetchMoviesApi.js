let allMovies = [];

const getNextPage = (columns_per_page, page) => {
    fetch(`http://localhost:8080/movies/all?pageNo=${page + 1}&pageSize=${columns_per_page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

        .then(res => res.json())
        .then(result => {
            allMovies = result;
        })
    return allMovies;

}

const getPreviousPage = (columns_per_page, page) => {
    fetch(`http://localhost:8080/movies/all?pageNo=${page - 1}&pageSize=${columns_per_page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

        .then(res => res.json())
        .then(result => {
            allMovies = result;
        })
    return allMovies;

}
export { getNextPage, getPreviousPage, allMovies };