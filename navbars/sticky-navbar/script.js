document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('stickyNav');
    const hero = document.querySelector('.hero');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // The point where the navbar should become sticky
    // We use the bottom of the hero section
    let stickyOffset = hero.offsetHeight;

    // Recalculate on resize
    window.addEventListener('resize', () => {
        stickyOffset = hero.offsetHeight;
    });

    // Sticky Scroll Event
    window.addEventListener('scroll', () => {
        if (window.scrollY >= stickyOffset) {
            navbar.classList.add('is-sticky');
        } else {
            navbar.classList.remove('is-sticky');
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
