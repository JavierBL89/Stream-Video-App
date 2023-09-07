
let current_page = 0;
let start ;
let end ;
let paginatedList = [];


    function displayList(items, columns_per_page, page){
        //  img_wraper.innerHTML = " ";
         current_page = page +1;
         
         start = columns_per_page * current_page;
         end = start + columns_per_page ;
         
         paginatedList = items.slice(start, end);

       
        console.log(paginatedList);
        return paginatedList;

    }


   export { displayList, paginatedList };