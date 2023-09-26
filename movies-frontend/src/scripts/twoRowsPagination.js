import {allMovies} from "./fetchMoviesApi";


const allMoviesArray = allMovies;
let moviesArray1 = [];
let moviesArray2 = [];

    /** split the array of movies into 2 different arrays */
 

let disabled = false;
let start ;
let end ;



    function displayList( columns_per_page, page){

        // set the start and end of the sequence of items to be sliced from the array of items
         start = columns_per_page * page;
         end = start + columns_per_page ;
         
         // change button state depending on the current page and export it
        //  if(start === 0){
        //     disabled = true;
        //  }else{
        //     disabled = false
        //  }
         moviesArray1 = allMoviesArray.slice(start, end);
         moviesArray2 = allMoviesArray.slice(start+6, end+6);
         // set the sequence of items to show for each array
        //  if(listName === "list1"){
        //     moviesArrayPaginated1 = moviesArray1.slice(start, end);

        //  }else if(listName === "list2"){
        //     moviesArrayPaginated2 = moviesArray2.slice(start, end);
        //  }

    }


   export { displayList, moviesArray1, moviesArray2, disabled };