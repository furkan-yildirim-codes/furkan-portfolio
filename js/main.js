const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("scroll", function() {
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", this.window.scrollY > 50);
});

document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    }
})

const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

const revealItems = document.querySelectorAll(".reveal-item");
const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".reveal-item");
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("active");
                }, index * 150);
            });
        }
    });
}, {
    threshold: 0.2
});
document.querySelectorAll("section").forEach(section => {
    itemObserver.observe(section);
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}