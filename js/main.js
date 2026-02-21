const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function() {
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", this.window.scrollY > 50);
});