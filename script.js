document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. Dual Dark & Light Theme State Machine Engine --- */
    const pcThemeToggleBtn = document.getElementById("theme-toggle");
    const mobileThemeToggleBtn = document.getElementById("theme-toggle-mobile");
    const body = document.body;

    // Check configuration memory storage logic for rendering user profile preference
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

    if (currentTheme) {
        body.setAttribute("data-theme", currentTheme);
        updateThemeIcons(currentTheme);
    }

    function updateThemeIcons(theme) {
        const iconPc = pcThemeToggleBtn.querySelector("i");
        const iconMobile = mobileThemeToggleBtn.querySelector("i");
        const textMobile = mobileThemeToggleBtn.querySelector("span");

        if (theme === "dark") {
            iconPc.classList.remove("fa-moon");
            iconPc.classList.add("fa-sun");
            iconMobile.classList.remove("fa-moon");
            iconMobile.classList.add("fa-sun");
            textMobile.innerText = "Light Mode";
        } else {
            iconPc.classList.remove("fa-sun");
            iconPc.classList.add("fa-moon");
            iconMobile.classList.remove("fa-sun");
            iconMobile.classList.add("fa-moon");
            textMobile.innerText = "Dark Mode";
        }
    }

    function toggleTheme() {
        if (body.getAttribute("data-theme") === "dark") {
            body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            updateThemeIcons("light");
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            updateThemeIcons("dark");
        }
    }

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
    window.addEventListener("scroll", checkVisibility);
});