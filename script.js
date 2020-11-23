var home = document.getElementById('home');
home.addEventListener("click", function(){
  
})

var wm = document.getElementById('gametime');
wm.addEventListener("click", function(){

})

var pg = document.getElementById('other');
pg.addEventListener("click", function(){
  
})

var au = document.getElementById('aboutUs');
au.addEventListener("click", function(){
 
})

var au = document.getElementById('mentorship');
au.addEventListener("click", function(){
 
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function myFunction() {
  var x = document.getElementById("custom");
  var y = document.getElementById("email1");
  var z = document.getElementById("email2");
  y.style.display = "none";
  z.style.display = "none";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function email1() {
  var x = document.getElementById("custom");
  var y = document.getElementById("email1");
  var z = document.getElementById("email2");
  x.style.display = "none";
  z.style.display = "none";
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function email2() {
  var x = document.getElementById("custom");
  var y = document.getElementById("email1");
  var z = document.getElementById("email2");
  x.style.display = "none";
  y.style.display = "none";
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}