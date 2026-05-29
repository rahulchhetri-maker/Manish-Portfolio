document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. Custom Pill Theme Switcher (Left Position = Light / Right = Dark) --- */
    const pcThemeToggleBtn = document.getElementById("theme-toggle");
    const mobileThemeToggleBtn = document.getElementById("theme-toggle-mobile");
    const body = document.body;

    // Read project default storage config cache state initialization
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

    // Attach listeners across all components
    pcThemeToggleBtn.addEventListener("click", toggleTheme);
    mobileThemeToggleBtn.addEventListener("click", toggleTheme);


    /* --- 2. Partial Mobile Menu (70% Drawer Width Viewport Controls) --- */
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const navItems = document.querySelectorAll(".nav-item");

    mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("mobile-active");
        
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // Automatically close the sliding menu when an option is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navMenu.classList.remove("mobile-active");
            const icon = mobileMenuBtn.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });

    // Close mobile drawer when clicking anywhere outside of it
    document.addEventListener("click", (e) => {
        if (navMenu.classList.contains("mobile-active") && !navMenu.contains(e.target) && e.target !== mobileMenuBtn) {
            navMenu.classList.remove("mobile-active");
            const icon = mobileMenuBtn.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        }
    });


    /* --- 3. Viewport Scroll Popups Observer Engine --- */
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