const toggleoverlay = document.getElementById('qr');
const overlay = document.getElementById('overlay');
const lukOverlay = document.getElementById('closeOverlay');

toggleoverlay.addEventListener('click', () => {



    overlay.classList.add('active');
})

lukOverlay.addEventListener('click', () => {



    overlay.classList.remove('active');
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("home_slides");
  let dots = document.getElementsByClassName("prik");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" aktiv_prik", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " aktiv_prik";
  setTimeout(showSlides, 5000); 
}

