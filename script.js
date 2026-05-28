document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. Mobile Hamburger Navbar Functionality --- */
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const navItems = document.querySelectorAll(".nav-item");

    // Click bar button to slide open/close navigation panel
    mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-active");
        
        // Dynamic icon swap between lines and close-X
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // Close modern sliding drawer menu immediately when any tab is clicked 
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navMenu.classList.remove("mobile-active");
            const icon = mobileMenuBtn.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });


    /* --- 2. Scroll Trigger Pop-up Animation Engine --- */
    const popUpElements = document.querySelectorAll(".pop-up");

    const checkVisibility = () => {
        // Triggers the animation when the top of the element hits 80% down the screen height
        const triggerBottom = (window.innerHeight / 5) * 4;

        popUpElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    };

    // Run on initial page configurations setup 
    checkVisibility();

    // Trigger pop-up animations dynamically on page navigation actions
    window.addEventListener("scroll", checkVisibility);
});