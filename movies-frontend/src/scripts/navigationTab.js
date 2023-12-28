import  $  from 'jquery'; 

navigationTab();
function navigationTab (){

    document.addEventListener("DOMContentLoaded", () => {
        console.log("Hello World!");
        console.log("ee");
    
        const navTab = $(".navTab-container .nav");
        
        console.log(navTab.innerHTML);
      });
   


}
