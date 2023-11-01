class mainPage {
  dotsContainer = document.querySelector(".dots-container");
  determineSlidesMove = 0;
  // homePage1 = document.querySelector(".home-page-1");
  dots = document.querySelectorAll(".dot");

  constructor() {
    this.separateImages();
    this.dotsANdSlides();
    this.dotsClicked();
  }

  // Separate interval images
  separateImages() {
    document.querySelectorAll(".home-page-1-img-cont").forEach((el, i) => {
      el.style.transform = `translateX(${100 * i}%)`;
    });
  }

  dotsANdSlides() {
    // Set first dot to black
    document.querySelector(".dot-1").classList.add("active");
    
    // Interval to move slides
    const intervalCallback = function () {
      this.dots.forEach((el, i) => {
        el.classList.remove("active");
      });

      if (this.determineSlidesMove > 6) {
        this.determineSlidesMove = 0;
      }

      this.determineSlidesMove++;
      document.querySelectorAll(".home-page-1-img-cont").forEach((el, i) => {
        el.style.transform = `translateX(${
          100 * (i + 1 - this.determineSlidesMove)
        }%)`;
        if (el.style.transform === "translateX(0%)") {
          document.querySelector(`.dot-${i + 1}`).classList.add("active");
        }
      });
    };

    const slideInterval = setInterval(intervalCallback.bind(this), 4000);

    // Remove interval when user refresh page or leave it
    window.addEventListener("beforeunload", function (e) {
      this.clearInterval(slideInterval);
    });
  }

  // CHnage dots color when clicked
  dotsClicked() {
    this.dotsContainer.addEventListener("click", (e) => {
      if (e.target.dataset.num) {
        document.querySelectorAll(".dot").forEach((dot) => {
          dot.classList.remove("active");
        });

        let countSlide = e.target.dataset.num;
        this.determineSlidesMove = countSlide;
        document.querySelectorAll(".home-page-1-img-cont").forEach((el, i) => {
          el.style.transform = `translateX(${100 * (i + 1 - countSlide)}%)`;
        });

        e.target.classList.add("active");
      }
    });
  }
}
