
window.onscroll = function() {showHideNav()};

function toggle(){
	var sec = document.getElementById('navPrincipal');
	var nav = document.getElementById('navMenu');
	sec.classList.toggle('active');
	nav.classList.toggle('active');
}

function showHideNav(){
	var navSuperior = document.getElementById("navLogo");

	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		navSuperior.style.height = "0";
	} else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
		navSuperior.style.height = "auto";
	}
}


function showSliderPrinc(target, target2){
	var sliderImgList = document.getElementsByClassName("sliderPrincImg");
	var sliderNameList = document.getElementsByClassName("sliderName");

	for (var i = 0; i < sliderImgList.length; i++){
		sliderImgList[i].style.display = "none";
		sliderNameList[i].style.display = "none";
	}

	var sliderButtonList = document.getElementsByClassName("sliderElementButton");

	for (var i = 0; i < sliderButtonList.length; i++){
		sliderButtonList[i].classList.toggle("sliderElementButton.active");
	}

	document.getElementById(target).style.display = "block";
	document.getElementById(target2).style.display = "block";
}

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 



function productPestaña(show) {
	var productList = document.getElementsByClassName("princProductos");

	// Aquí s'amaguen tots els contenidors 

	for (var i = 0; i<productList.length; i++) {
		productList[i].style.display = "none";
	}

	document.getElementById(show).style.display = "grid";

}

function displayCustomImage(event) {

}