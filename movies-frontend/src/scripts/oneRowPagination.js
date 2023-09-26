import {allMovies, getAllMovies} from "./fetchMoviesApi";


let moviesArrayPaginated = allMovies;


let disabledButton = false;
let start ;
let end ;


    function displayList(columns_per_page, page){
         getAllMovies(page);
        // set the start and end of the sequence of items to be sliced from the array of items
         start = columns_per_page * page;
         end = start + columns_per_page ;
         
         // change button state depending on the current page and export it
         if(start === 0){
            disabledButton = false;
         }else if(start === 2){
            disabledButton = true;
         }

         // set the sequence of items to show
          return   allMovies.slice(start, end);
    }


   export { displayList, moviesArrayPaginated, disabledButton };