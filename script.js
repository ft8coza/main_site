document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 500, // Duration of the animation in milliseconds
        delay: 300,    // Delay in animation start in milliseconds
        easing: 'ease-in-out', // Easing function for the animation (optional)
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out while scrolling past them
    });
});