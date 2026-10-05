
// Navbar scroll effect
document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth reveal animations when scrolling
const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

function checkScrollAnimations() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener("scroll", checkScrollAnimations);
window.addEventListener("load", checkScrollAnimations);
