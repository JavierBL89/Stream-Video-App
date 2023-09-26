import {allMovies, getAllMovies} from "./fetchMoviesApi";

let moviesArrayPaginated = allMovies;
let start ;
let end ;

function displayList(columns_per_page, page){
      // Make call to retreive data when next/prev page is required
      getAllMovies(page);
      // set the start and end of the sequence of items to be sliced from the array of items
      start = columns_per_page * page;
      end = start + columns_per_page ;
         
      // set the sequence of items to show
      return   allMovies.slice(start, end);
    }


   export { displayList, moviesArrayPaginated };