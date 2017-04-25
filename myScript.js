
// Contact Us Form Validation
function validateForm() {
    var x = document.forms["ContactForm"]["firstname"].value;
    var y = document.forms["ContactForm"]["lastname"].value;
    var z = document.forms["ContactForm"]["emailaddress"].value;
	if (x==null || x=="" || y==null || y=="" || z==null || z=="") {alert("Please Fill out all the the fields");return false;}}

// date 
var d = new Date();
document.getElementById("date").innerHTML = d;

// dropdown
function myFunction() {document.getElementById("dropdown1").classList.toggle("show");}
window.onclick = function(event) {if (!event.target.matches('.dropdownbutton')) {var dropdowns = document.getElementsByClassName("dropdownpages");var i;for (i = 0; i < dropdowns.length; i++) {var openDropdown = dropdowns[i];if (openDropdown.classList.contains('show')) {openDropdown.classList.remove('show');}}}}

// slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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