import putos from "../fakeMovies.js";


const allMoviesArray = putos;
let moviesArray1 = [];
let moviesArray2 = [];

    /** split the array of movies into 2 different arrays */
    for(let i=0;i < allMoviesArray.length;i++){
        if(allMoviesArray[i] %2 ===0){
            moviesArray1.push(allMoviesArray[i]);
        }else{
            moviesArray2.push(allMoviesArray[i]);
        }
    }

let disabled = false;
let start ;
let end ;
let moviesArrayPaginated1 = [];
let moviesArrayPaginated2 = [];


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

         // set the set the sequence of items to show for each array
         if(listName === "list1"){
            moviesArrayPaginated1 = moviesArray1.slice(start, end);

         }else if(listName === "list2"){
            moviesArrayPaginated2 = moviesArray2.slice(start, end);
         }

    }


   export { displayList, moviesArrayPaginated1, moviesArrayPaginated2, disabled };