const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const gallerySliderEl = document.getElementById("g-slider");

const mainGalleryEl = document.querySelector(".main-gallery");
const prevBtnEl = document.querySelector(".prev-btn");
const nextBtnEl = document.querySelector(".next-btn");
const images = [
  `Images/Room2.jpeg`,
  `Images/Hall.jpeg`,
  `Images/FrontBar.jpeg`,
];
let currentIndex = 0;

let currentImg = 1;
let timeout;
const imgsEl = document.querySelectorAll(".gallery-image");

nextEl.addEventListener("click", function () {
  currentImg++;
  updateImg();
});
prevEl.addEventListener("click", function () {
  currentImg--;
  updateImg();
});

function updateImg() {
  if (currentImg > imgsEl.length - 1 || currentImg < 1) {
    currentImg = 0;
  }
  console.log(currentImg);
  var scale = currentImg * -innerWidth;
  console.log(scale);
  gallerySliderEl.style.transform = `translateX(${scale}px)`;
}

setInterval((e) => {
  currentImg++;
  updateImg();
}, 3000);

prevBtnEl.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  updateImage();
});
nextBtnEl.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  updateImage();
});

function updateImage() {
  const img = gallery.querySelector(".gallerybody-image");
  img.ClassList.add("slide");
  setTime;
}
