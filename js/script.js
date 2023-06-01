let offset = 0;
const slider = document.querySelector(".info_6_slider-line");
const slider_num = document.querySelector(".info_6_slider_num");

document
  .querySelector(".info_6_button_next")
  .addEventListener("click", function () {
    offset = offset + 660;
    if (offset > 660) {
      offset = 660;
    }
    slider.style.left = -offset + "px";
    slider_num.textContent = "02 / 02";
  });

document
  .querySelector(".info_6_button_back")
  .addEventListener("click", function () {
    offset = offset - 660;
    if (offset < 0) {
      offset = 0;
    }
    slider.style.left = offset + "px";
    slider_num.textContent = "01 / 02";
  });

var carouselInner = document.querySelector(".carousel-inner");
var isMouseDown = false;
var startX;
var scrollLeft;

carouselInner.addEventListener("mousedown", function (event) {
  isMouseDown = true;
  startX = event.pageX - carouselInner.offsetLeft;
  scrollLeft = carouselInner.scrollLeft;
  carouselInner.style.cursor = "grabbing";
});

carouselInner.addEventListener("mouseleave", function () {
  isMouseDown = false;
});

carouselInner.addEventListener("mouseup", function () {
  isMouseDown = false;
});

carouselInner.addEventListener("mousemove", function (event) {
  if (!isMouseDown) return;
  event.preventDefault();
  var x = event.pageX - carouselInner.offsetLeft;
  var walk = (x - startX) * 2;
  carouselInner.scrollLeft = scrollLeft - walk;
});
