// Stores image file paths
let images = [
  "images/seaside.jpg",
  "images/garden.jpg",
  "images/cover.jpg",
  "images/breakfast.jpg"
];

// Stores captions
let captions = [
  "Seaside Room View",
  "Garden Suite",
  "Ocean Sunset",
  "Homemade Breakfast"
];

function loadGallery() {
  let galleryCode = "";

  // Loop through the images and creates the HTMLs
  for (let i = 0; i < images.length; i++) {
    galleryCode += `
      <figure>
        <img src="${images[i]}" alt="${captions[i]}" onclick="openLightbox('${images[i]}')">
        <figcaption>${captions[i]}</figcaption>
      </figure>
    `;
  }

  // Insert into the page
  document.getElementById("gallery")
    .insertAdjacentHTML("beforeend", galleryCode);
}

// Opens enlarged image
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

// Closes lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Run on Page Load
window.onload = loadGallery;