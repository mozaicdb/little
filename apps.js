let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlides(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += 'active';
}

//let slideIndexz = 0;
//showSlides(slideIndexz);

//function showSlides() {
//  let i;
//let slidess = document.getElementsByClassName('mySlides');
//for (i = 0; i < slidess.length; i++) {
//  slidess[i].style.display = 'none';
//}
//slideIndexz++;
//if (slideIndexz > slidess.length) {
//  slideIndexz = 1;
//}
//slidess[slideIndexz - 1].style.length = 'block';
//setTimeout(showSlides, 2000);
//}