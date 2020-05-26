
"use strict";

(function(){
  /**
  This method calls the startFunction to display the home page and calls the start
  function on click of the "home" button.
  */
  function pageLoad(){
    var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
    document.getElementById("menuPage").style.display = "none";
    document.getElementById("storyPage").style.display = "none";
    document.getElementById("menuButton1").onclick = displayMenu;
    document.getElementById("menuButton2").onclick = displayMenu;
    document.getElementById("homeButton1").onclick = displayHome;
    document.getElementById("homeButton2").onclick = displayHome;
    document.getElementById("logo").onclick = displayHome;
    document.getElementById("storyButton1").onclick = displayStory;
    document.getElementById("storyButton2").onclick = displayStory;
    var el = document.getElementsByClassName("button");
    for (var i in el){
        el[i].onmouseover = function(){
                this.style.color = "Red";
        };
        el[i].onmouseout  = function(){
                this.style.color = "White";
        };
      }
    //alert("in");
  //  var buttons = document.getElementsByClassName("button");
  //  for (var i = 0; i<buttons.length;i++){
    //  buttons[i].onclick = alert("why");
    //onmouseover = changeRed;
  //  displayHome();
  }

function displayStory(){
//  document.getElementById("dots").style.display = "none";

  document.getElementById("menuPage").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("main2").style.display = "none";
  document.getElementById("storyPage").style.display = "block";
}

function displayHome(){
  //document.getElementById("dots").style.display = "block";

  document.getElementById("menuPage").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("main2").style.display = "flex";
  document.getElementById("storyPage").style.display = "none";

}

function displayMenu(){
//  document.getElementById("dots").style.display = "none";

  document.getElementById("menuPage").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("main2").style.display = "none";
  document.getElementById("storyPage").style.display = "none";
  //document.getElementById("menuPage").style.display = "none";

}
  function changeRed(){
    alert("asd");
    this.style.color = "Red";
  }

  function changeWhite(){
    this.style.color = "White";

  }

  function changeBlack(){
    this.style.color = "Black";

  }
  window.addEventListener("load", pageLoad);
})();
