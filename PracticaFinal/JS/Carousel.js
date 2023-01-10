var index = 0;
var CarouselElements = document.getElementsByClassName("carousel-item");
var intervalID = window.setInterval(function () {
 $(".carousel-item").removeClass("active");
 console.log(index);
 if (index < (CarouselElements.length - 1)) {
  index = index + 1;
 } else {
  index = 0;
 }
 CarouselElements[index].classList.add("active");
}, 5000);
var carouselShuffle = setInterval(carousel, 5000);