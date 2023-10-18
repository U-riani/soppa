const dotsContainer = document.querySelector(".dots-container");
const homePage1 = document.querySelector(".home-page-1");
let determineSlidesMove = 0;
const dots = document.querySelectorAll(".dot");


// Separate images on home page 1
document.querySelectorAll(".home-page-1-img-cont").forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;
});

// Set first dot to black
document.querySelector(".dot-1").classList.add("active");

// Change slides and dots automaticaly
const intervalCallback = function () {
  // Control dots flow
  dots.forEach((el, i) => {
    el.classList.remove("active");
  });

  if (determineSlidesMove > 6) {
    determineSlidesMove = 0;
  }

  determineSlidesMove++;
  document.querySelectorAll(".home-page-1-img-cont").forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i + 1 - determineSlidesMove)}%)`;
    if (el.style.transform === "translateX(0%)") {
      document.querySelector(`.dot-${i + 1}`).classList.add("active");
    }
  });
};

const slideInterval = setInterval(intervalCallback, 4000);
// slideInterval();

// Remove interval when user refresh page or leave it
window.addEventListener("beforeunload", function (e) {
  this.clearInterval(slideInterval);
});

// CHnage dots color when clicked
dotsContainer.addEventListener("click", function (e) {
  if (e.target.dataset.num) {
    document.querySelectorAll(".dot").forEach((dot) => {
      dot.classList.remove("active");
    });

    let countSlide = e.target.dataset.num;
    determineSlidesMove = countSlide;
    document.querySelectorAll(".home-page-1-img-cont").forEach((el, i) => {
      el.style.transform = `translateX(${100 * (i + 1 - countSlide)}%)`;
    });

    e.target.classList.add("active");
  }
});
