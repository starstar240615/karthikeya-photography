/* ==========================================
   Karthikeya Photography Website
   script.js
   ========================================== */

/* ------------------------------
   Mobile Navigation
------------------------------ */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.innerHTML =
            navLinks.classList.contains("active")
                ? "✖"
                : "☰";

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuBtn.innerHTML = "☰";

        });

    });

}


/* ------------------------------
   Preloader
------------------------------ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    }

});


/* ------------------------------
   Sticky Navbar
------------------------------ */

navbar.classList.toggle("sticky", window.scrollY > 50);
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(!navbar) return;

    if(window.scrollY > 80){

        navbar.style.background = "#111";
        navbar.style.padding = "15px 0px";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    }

    else{

        navbar.style.background = "rgba(0,0,0,.45)";
        navbar.style.padding = "22px 0";
        navbar.style.boxShadow = "none";

    }

});


/* ------------------------------
   Back To Top Button
------------------------------ */

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* ------------------------------
   Scroll Reveal
------------------------------ */

const revealItems = document.querySelectorAll(
    ".service-card,.testimonial-card,.price-card,.gallery-grid img,.about-preview,.cta,.contact-box,.reveal"
);

function revealOnScroll(){

    const trigger = window.innerHeight - 50;

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");
            item.classList.add("slide-up");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);


/* ------------------------------
   Active Navigation
------------------------------ */

const currentPage =
window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});


/* ------------------------------
   Smooth Anchor Scroll
------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ------------------------------
   Contact Form Validation
------------------------------ */

const contactForm =
document.querySelector("#contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        const name =
        document.querySelector("#name");

        const email =
        document.querySelector("#email");

        const message =
        document.querySelector("#message");

        if(

            name.value.trim()==="" ||

            email.value.trim()==="" ||

            message.value.trim()===""

        ){

            alert("Please fill all required fields.");

            return;

        }

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email.value)){

            alert("Please enter a valid email.");

            return;

        }

        alert("Thank you! Your message has been sent.");

        contactForm.reset();

    });

}


/* ------------------------------
   Counter Animation
------------------------------ */

const counters =
document.querySelectorAll(".stat-box h3");

let counterStarted = false;

function animateCounters(){

    if(counterStarted) return;

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection) return;

    const sectionTop =
    statsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter=>{

            const target =
            parseInt(counter.innerText);

            let current = 0;

            const increment =
            Math.ceil(target/100);

            const update=()=>{

                current += increment;

                if(current >= target){

                    counter.innerText = target + "+";

                }

                else{

                    counter.innerText = current + "+";

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll",animateCounters);
window.addEventListener("load",animateCounters);


/* ------------------------------
   Console Welcome
------------------------------ */

console.log(
"%cLensCraft Photography Website Loaded",
"color:#d4af37;font-size:18px;font-weight:bold;"
);
document
    .getElementById("contact-form")
    .addEventListener("submit", function() {

        alert("Your message is being sent...");

    });
fetch("https://your-backend.com/api/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        email: email,
        message: message
    })
});