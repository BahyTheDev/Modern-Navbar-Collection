document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const hamburger = document.querySelector('.hamburger-animated');
    const navLinks = document.querySelector('.nav-links');
    
    // Desktop indicator line logic
    const links = document.querySelectorAll('.nav-links a');
    const indicator = document.querySelector('.animation-line');
    
    // Initial setup for indicator (if not on mobile)
    function setupIndicator() {
        if (window.innerWidth > 768 && indicator) {
            const activeLink = document.querySelector('.nav-links a.active');
            if (activeLink) {
                indicator.style.width = `${activeLink.offsetWidth}px`;
                indicator.style.left = `${activeLink.offsetLeft}px`;
            }
        }
    }
    
    // Wait for fonts to load before calculating initial position
    document.fonts.ready.then(setupIndicator);

    // Hover effect for indicator
    if (window.innerWidth > 768) {
        links.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                indicator.style.width = `${e.target.offsetWidth}px`;
                indicator.style.left = `${e.target.offsetLeft}px`;
            });
        });

        navLinks.addEventListener('mouseleave', () => {
            setupIndicator();
        });
    }

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            setupIndicator();
        }
    });
});
