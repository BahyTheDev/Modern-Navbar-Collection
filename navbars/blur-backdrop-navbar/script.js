document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const icon = mobileToggle.querySelector('ion-icon');

    // Add scrolled class based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('name', 'close-outline');
            navbar.style.background = 'rgba(13, 13, 18, 0.95)'; // Solidify background more when open
        } else {
            icon.setAttribute('name', 'menu-outline');
            if (window.scrollY <= 20) {
                navbar.style.background = 'rgba(13, 13, 18, 0.6)';
            }
        }
    });

    // Close menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            icon.setAttribute('name', 'menu-outline');
            navbar.style.background = ''; // reset inline style
        }
    });
});
