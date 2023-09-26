let allMovies= [];

const getAllMovies = (page) =>{
    console.log("ee");
    let page_size = 6;

    fetch(`http://localhost:8080/movies/all?pageNo=${page}&pageSize=${page_size}`,{
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