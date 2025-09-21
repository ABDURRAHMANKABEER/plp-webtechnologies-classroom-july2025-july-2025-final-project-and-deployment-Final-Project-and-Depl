// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Navbar toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("mainNav");

    if (navToggle && navMenu) {
        // Set default accessibility state
        navMenu.setAttribute("aria-hidden", "true");

        navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        navMenu.setAttribute("aria-hidden", String(expanded));
        });
    }

    // Dynamic year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Contact form validation (if present)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
        const name = contactForm.querySelector("input[name='name']");
        const email = contactForm.querySelector("input[type='email']");
        const message = contactForm.querySelector("textarea");

        let errors = [];

        if (!name.value.trim()) errors.push("Name is required");
        if (!email.value.includes("@")) errors.push("Valid email is required");
        if (!message.value.trim()) errors.push("Message is required");

        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
        });
    }
});
