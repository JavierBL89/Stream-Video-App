
let rows = 1;
let current_page = 1;
let columns_per_page = 6;
let start = columns_per_page * current_page;
let end = start + columns_per_page;
let item;
let paginatedList = [];


    function displayList(items, img_wraper, element, current_page){
        //  img_wraper.innerHTML = " ";
         current_page--;

         paginatedList = items.slice(start, end);

       
        console.log(paginatedList);
        return paginatedList;

    }


   export { displayList, paginatedList };