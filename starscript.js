// variables declarations
var i;
var star = document.getElementsByClassName("star").length;
var length = document.documentElement.clientWidth;
// we use for loop to assign unique random values for the x position and animation speed
for (i = 0; i < star; i++) {
  x = Math.floor(Math.random() * length);
  y = Math.floor(Math.random() * 10);
document.getElementsByClassName("star")[i].style.transform = "translateX(" + x + "px)";
document.getElementsByClassName("star")[i].style.animationDuration = y + "s";  
}