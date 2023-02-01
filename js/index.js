let images = [
  {
    url: "https://kartinkin.net/uploads/posts/2022-02/1644897077_1-kartinkin-net-p-krasivie-kartinki-more-2.jpg",
    title: "Admiral",
  },
  {
    url: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
    title: "Sochi",
  },
  {
    url: "https://klike.net/uploads/posts/2022-08/1661403895_j-48.jpg",
    title: "Patriotic",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderPicture = document.querySelector(".slider__picture");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLinks = document.querySelector(".list__projects");

  initImages();
  initArrows();
  initDots();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="slider__img n${index} 
      ${index === 0 ? "active" : ""}" 
      style = "background-image: url(${images[index].url});" 
        data-index="${index}"></div>`;
      sliderPicture.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderPicture.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("arrow__left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dot n${index} ${index === 0 ? "slider__dot-active" : ""}"
      data-index=${index}></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dot").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".slider__dot-active").classList.remove("slider__dot-active");
        this.classList.add("slider__dot-active");
      });
    });
  }

  function moveSlider(num) {
    sliderPicture.querySelector(".active").classList.remove("active");
    sliderPicture.querySelector(".n" + num).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", initSlider);
