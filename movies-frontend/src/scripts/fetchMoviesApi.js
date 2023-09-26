let allMovies= [];

const getAllMovies = (columns_per_page, page) =>{
    fetch(`http://localhost:8080/movies/all?pageNo=${page}&pageSize=${columns_per_page}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
       .then(res=>res.json())
       .then(result=>{

        allMovies = result;
       })
       return allMovies;

}
export { getAllMovies, allMovies };