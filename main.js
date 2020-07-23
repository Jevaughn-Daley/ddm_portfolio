// Get header
var header = document.getElementById("header");

// Get the modal
var modal = document.getElementById("my-modal-container");
// Get the modal
var main = document.getElementById("main");

// get navigation links
var nav = document.getElementsByClassName("js-links");

// Get the <span> element that closes the modal
var span = document.getElementById("close-modal");

var linkList= [] 

var prevPage

document.querySelectorAll(".js-links").forEach((link) => {
    var pageId = link.getAttribute("href").substring(1);
    var page = document.getElementById(pageId);
    prevPage=page;
  //   linkList.push(page) 
    link.addEventListener("click", (openPage) => {
      
      //handle click
  
      header.style.display = "none";
      main.style.display = "flex"
      modal.style.display = "flex";
      page.style.display = "flex";
  
           
  
  
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          header.style.display = "flex";
          main.style.display = "none"
          modal.style.display = "none";
          page.style.display = "none";
          
        };
  
   
   // close other pages when new link is clicked
     
  
    
        if (prevPage !== page){
            prevPage.style.display  ="none";
            prevPage=page;
        };
          
  
      };
  
      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        header.style.display = "flex";  
        modal.style.display = "none";
        main.style.display = "none"
        page.style.display = "none";
      };
    });
  });



//   skills bars


