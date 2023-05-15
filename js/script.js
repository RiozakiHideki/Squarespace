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
