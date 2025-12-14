/* GALLERY IMAGES */
const galleryImages = [
  "/assets/prod-1.png",
  "/assets/prod-3.png",
  "/assets/prod-4.png",
  "/assets/prod-5.png",
  "/assets/prod-2.png",
  "/assets/prod-3.png",
  "/assets/prod-4.png",
  "/assets/prod-5.png",
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const dotsContainer = document.getElementById("dots");
const thumbGrid = document.getElementById("thumbnailGrid");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* BUILD DOTS */
function buildDots() {
  dotsContainer.innerHTML = "";
  galleryImages.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });
}

/* BUILD THUMBNAILS */
function buildThumbnails(){
    thumbGrid.innerHTML=''
    galleryImages.forEach((image,idx)=>{
        const img = document.createElement('img')
        img.src = image
        img.classList.add("thumb-img");
        img.addEventListener('click',()=>goTo(idx))
        thumbGrid.appendChild(img)
    })
}



/* UPDATE UI */
function updateUI() {
  mainImage.src = galleryImages[currentIndex];

  document
    .querySelectorAll(".dot")
    .forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));

  document
    .querySelectorAll(".thumb-img")
    .forEach((t, i) => t.classList.toggle("active-thumb", i === currentIndex));
}

/* GO TO SLIDE */
function goTo(i) {
  currentIndex = i;
  updateUI();
}

/* PREV/NEXT BUTTON LOGIC */
prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateUI();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateUI();
});

/* Initialization */
buildDots();
buildThumbnails();
updateUI();
