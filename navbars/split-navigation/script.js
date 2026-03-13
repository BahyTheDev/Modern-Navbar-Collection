document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');

    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        
        if (mobileMenu.classList.contains('open')) {
            menuIcon.setAttribute('name', 'close-outline');
            document.body.style.overflow = 'hidden'; // Stop background scroll
        } else {
            menuIcon.setAttribute('name', 'menu-outline');
            document.body.style.overflow = '';
        }
    });

    // Close menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('open');
            menuIcon.setAttribute('name', 'menu-outline');
            document.body.style.overflow = '';
        }
    });
});
