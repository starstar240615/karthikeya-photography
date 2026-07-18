/* ==========================================
   Karthikeya Photography Website
   gallery.js
   ========================================== */

/* ------------------------------
   Image Lightbox
------------------------------ */

const galleryImages = document.querySelectorAll(".gallery-grid img");

let currentIndex = 0;

/* ------------------------------
   Create Lightbox
------------------------------ */

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="closeLightbox">&times;</span>

    <button id="prevImage">&#10094;</button>

    <img id="lightboxImage" src="" alt="">

    <button id="nextImage">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

/* ------------------------------
   Open Lightbox
------------------------------ */

function openLightbox(index){

    currentIndex = index;

    lightboxImage.src = galleryImages[currentIndex].src;

    lightbox.style.display = "flex";

    document.body.style.overflow = "hidden";

}

/* ------------------------------
   Close
------------------------------ */

function hideLightbox(){

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

}

/* ------------------------------
   Next Image
------------------------------ */

function showNext(){

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    lightboxImage.src = galleryImages[currentIndex].src;

}

/* ------------------------------
   Previous Image
------------------------------ */

function showPrevious(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    lightboxImage.src = galleryImages[currentIndex].src;

}

/* ------------------------------
   Image Click
------------------------------ */

galleryImages.forEach((image,index)=>{

    image.style.cursor = "zoom-in";

    image.addEventListener("click",()=>{

        openLightbox(index);

    });

});

/* ------------------------------
   Buttons
------------------------------ */

closeLightbox.addEventListener("click",hideLightbox);

nextImage.addEventListener("click",showNext);

prevImage.addEventListener("click",showPrevious);

/* ------------------------------
   Close on Background Click
------------------------------ */

lightbox.addEventListener("click",(event)=>{

    if(event.target === lightbox){

        hideLightbox();

    }

});

/* ------------------------------
   Keyboard Support
------------------------------ */

document.addEventListener("keydown",(event)=>{

    if(lightbox.style.display !== "flex") return;

    switch(event.key){

        case "Escape":
            hideLightbox();
            break;

        case "ArrowRight":
            showNext();
            break;

        case "ArrowLeft":
            showPrevious();
            break;

    }

});

/* ------------------------------
   Touch Swipe Support
------------------------------ */

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    if(touchStartX - touchEndX > 50){

        showNext();

    }

    if(touchEndX - touchStartX > 50){

        showPrevious();

    }

});

/* ------------------------------
   Image Preload
------------------------------ */

galleryImages.forEach(img=>{

    const preload = new Image();

    preload.src = img.src;

});

/* ------------------------------
   Dynamic Caption
------------------------------ */

const caption = document.createElement("div");

caption.id = "lightboxCaption";

lightbox.appendChild(caption);

function updateCaption(){

    caption.innerText =
        galleryImages[currentIndex].alt || `Image ${currentIndex + 1}`;

}

function openLightbox(index){

    currentIndex = index;

    lightboxImage.src = galleryImages[currentIndex].src;

    updateCaption();

    lightbox.style.display = "flex";

    document.body.style.overflow = "hidden";

}

function showNext(){

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    lightboxImage.src = galleryImages[currentIndex].src;

    updateCaption();

}

function showPrevious(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    lightboxImage.src = galleryImages[currentIndex].src;

    updateCaption();

}

console.log("Gallery Lightbox Loaded");
