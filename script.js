document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. Synchronized Pill Switch Theme Toggle Engine --- */
    const pcThemeToggleBtn = document.getElementById("theme-toggle");
    const mobileThemeToggleBtn = document.getElementById("theme-toggle-mobile");
    const body = document.body;

    // Check system storage for saved configuration preference
    const savedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
    body.setAttribute("data-theme", savedTheme);

    function toggleTheme() {
        const activeTheme = body.getAttribute("data-theme");
        if (activeTheme === "dark") {
            body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    }

    // Bind event handlers to both switches
    pcThemeToggleBtn.addEventListener("click", toggleTheme);
    mobileThemeToggleBtn.addEventListener("click", toggleTheme);


    /* --- 2. Mobile Responsive Navigation Toggle Layer --- */
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const navItems = document.querySelectorAll(".nav-item");

    mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // Automatically dismiss dropdown drawer on item clicks
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navMenu.classList.remove("mobile-active");
            const icon = mobileMenuBtn.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });


    /* --- 3. Viewport Boundary Popup Scroll Observer Engine --- */
    const popUpElements = document.querySelectorAll(".pop-up");

    const checkVisibility = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;

        popUpElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
});