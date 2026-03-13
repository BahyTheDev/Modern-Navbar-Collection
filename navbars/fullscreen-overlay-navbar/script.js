document.addEventListener('DOMContentLoaded', () => {
    const overlayNav = document.getElementById('overlayNav');
    const menuOpenBtn = document.querySelector('.menu-open-btn');
    const menuCloseBtn = document.querySelector('.menu-close-btn');

    // Open Menu
    menuOpenBtn.addEventListener('click', () => {
        overlayNav.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    });

    // Close Menu
    menuCloseBtn.addEventListener('click', () => {
        overlayNav.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Handle closing when a link is clicked
    const mainLinks = document.querySelectorAll('.main-menu a');
    mainLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlayNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
