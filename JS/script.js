const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  on: {
    resize: function () {
      resizesSlide();
    },
  },
});

function resizesSlide() {
  const windowInnerWidth = window.innerWidth;
  let slidesLength = swiper.slides;

  for (let i = 0; i < slidesLength.length; i++) {
    if (windowInnerWidth < 768 || windowInnerWidth > 1020) {
      slidesLength[i].style.width = 240 + "px";
    } else {
      slidesLength[i].style.width = 220 + "px";
    }
  }
}
resizesSlide();

let showAllBtn = document.querySelector(".brands__show-all");
let brandsHeight = document.querySelector(".brands__container");

function brandsShowAll(height, text) {
  brandsHeight.style.height = height;
  showAllBtn.classList.toggle("show-all__down");
  showAllBtn.classList.toggle("show-all__up");
  showAllBtn.textContent = text;
}

showAllBtn.addEventListener("click", function () {
  if (brandsHeight.style.height !== "100%") {
    brandsShowAll("100%", "Скрыть");
  } else {
    brandsShowAll("160px", "Показать все");
  }
  console.log("hello");
});
