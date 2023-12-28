import $ from 'jquery';



// document.addEventListener("DOMContentLoaded", () => {

//   console.log("Hello World!");
//   console.log("ee");
//   const mySpace = document.getElementById("mySpace");
//   const movies = document.getElementById("movies");

//   mySpace.classList.add("hiden");
//   movies.classList.remove("hiden");
//   movies.classList.add("show");
// });

const showSection = (eventKey) => {
  const pages = document.getElementById("puta").children;
  document.body.style.cursor = "wait";
  setTimeout(() => {
    // loop through the list of page components and toggle on & off
    for (let page of pages) {
      if (page.id === eventKey) {
        page.setAttribute("style", "display:block")
      }
      else {
        page.setAttribute("style", "display:none")
      }

    }
    document.body.style.cursor = "default";

  }, 1500)



};

export default showSection;
