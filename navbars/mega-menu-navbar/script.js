document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const megaBtn = document.querySelector('.mega-btn');
    const menuIcon = document.querySelector('.menu-icon');

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.contains('active');
        
        navLinks.classList.toggle('active');
        
        // Change icon
        if (!isActive) {
            menuIcon.setAttribute('name', 'close-outline');
            mobileToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            menuIcon.setAttribute('name', 'menu-outline');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Mega Menu Accordion for Mobile
    if (megaBtn) {
        megaBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                
                const dropdown = megaBtn.parentElement;
                const content = dropdown.querySelector('.mega-content');
                const isExpanded = megaBtn.getAttribute('aria-expanded') === 'true';

                megaBtn.setAttribute('aria-expanded', !isExpanded);
                dropdown.classList.toggle('open');
                content.classList.toggle('active');
            }
        });
    }

    // Window Resize Handler
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            navLinks.classList.remove('active');
            menuIcon.setAttribute('name', 'menu-outline');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            
            const dropdown = document.querySelector('.mega-dropdown');
            if (dropdown) {
                dropdown.classList.remove('open');
                dropdown.querySelector('.mega-content').classList.remove('active');
                dropdown.querySelector('.mega-btn').setAttribute('aria-expanded', 'false');
            }
        }
    });
});
