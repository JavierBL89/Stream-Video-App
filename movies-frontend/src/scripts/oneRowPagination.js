import putos from "../fakeMovies.js";


const allMoviesArray = putos;
let moviesArrayPaginated = [];


let disabled = false;
let start ;
let end ;


    function displayList(listName, columns_per_page, page){

        // set the start and end of the sequence of items to be sliced from the array of items
         start = columns_per_page * page;
         end = start + columns_per_page ;
         
         // change button state depending on the current page and export it
         if(start === 0){
            disabled = true;
         }else{
            disabled = false
         }

         // set the sequence of items to show
            moviesArrayPaginated = allMoviesArray.slice(start, end);

    }


   export { displayList, moviesArrayPaginated, disabled };