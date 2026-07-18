/* ==========================================
   Karthikeya Photography Website
   slider.js
   Testimonial Slider
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".testimonial-slider");

    if (!slider) return;

    const cards = slider.querySelectorAll(".testimonial-card");

    if (cards.length <= 1) return;

    let current = 0;
    let autoPlay;

    /* -----------------------------
       Create Navigation
    ----------------------------- */

    const controls = document.createElement("div");
    controls.className = "slider-controls";

    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "&#10094;";
    prevBtn.className = "slider-btn";

    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "&#10095;";
    nextBtn.className = "slider-btn";

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);

    slider.parentNode.appendChild(controls);

    /* -----------------------------
       Dots
    ----------------------------- */

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "slider-dots";

    cards.forEach((_, index) => {

        const dot = document.createElement("span");

        dot.className = "slider-dot";

        if (index === 0)
            dot.classList.add("active");

        dot.addEventListener("click", () => {

            current = index;

            updateSlider();

        });

        dotsContainer.appendChild(dot);

    });

    slider.parentNode.appendChild(dotsContainer);

    const dots = dotsContainer.querySelectorAll(".slider-dot");

    /* -----------------------------
       Update
    ----------------------------- */

    function updateSlider() {

        cards.forEach((card, index) => {

            if (index === current) {

                card.style.display = "block";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }

            else {

                card.style.display = "none";

            }

        });

        dots.forEach(dot => dot.classList.remove("active"));

        dots[current].classList.add("active");

    }

    /* -----------------------------
       Next
    ----------------------------- */

    function nextSlide() {

        current++;

        if (current >= cards.length)
            current = 0;

        updateSlider();

    }

    /* -----------------------------
       Previous
    ----------------------------- */

    function previousSlide() {

        current--;

        if (current < 0)
            current = cards.length - 1;

        updateSlider();

    }

    nextBtn.addEventListener("click", nextSlide);

    prevBtn.addEventListener("click", previousSlide);

    /* -----------------------------
       Auto Play
    ----------------------------- */

    function startSlider() {

        autoPlay = setInterval(nextSlide, 5000);

    }

    function stopSlider() {

        clearInterval(autoPlay);

    }

    slider.addEventListener("mouseenter", stopSlider);

    slider.addEventListener("mouseleave", startSlider);

    /* -----------------------------
       Keyboard
    ----------------------------- */

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowRight")
            nextSlide();

        if (e.key === "ArrowLeft")
            previousSlide();

    });

    /* -----------------------------
       Touch Swipe
    ----------------------------- */

    let startX = 0;

    slider.addEventListener("touchstart", e => {

        startX = e.changedTouches[0].screenX;

    });

    slider.addEventListener("touchend", e => {

        let endX = e.changedTouches[0].screenX;

        if (startX - endX > 50)
            nextSlide();

        if (endX - startX > 50)
            previousSlide();

    });

    updateSlider();

    startSlider();

    console.log("Testimonial Slider Loaded");

});