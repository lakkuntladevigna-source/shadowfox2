/* NAVIGATION SLIDER INDICATOR */
const navLinks = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".nav-indicator");

function updateIndicator(el) {
    indicator.style.width = el.offsetWidth + "px";
    indicator.style.left = el.offsetLeft + "px";
}

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => updateIndicator(link));
});

window.onload = () => {
    updateIndicator(navLinks[0]); // default on Home
};

/* SCROLL ANIMATIONS */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
