const navbarList = document.getElementById('navbar-list');
const navbarIframe = document.getElementById('navbar-iframe');

const navbars = [
    'animated-navbar',
    'blur-backdrop-navbar',
    'bottom-mobile-navbar',
    'centered-logo-navbar',
    'dark-mode-animated-navbar',
    'dropdown-navbar',
    'floating-navbar',
    'fullscreen-overlay-navbar',
    'glass-navbar',
    'mega-menu-navbar',
    'minimal-navbar',
    'neumorphism-navbar',
    'search-bar-navbar',
    'sidebar-navigation',
    'social-media-navbar',
    'split-navigation',
    'sticky-navbar',
];

const ul = document.createElement('ul');

navbars.forEach(navbar => {
    const li = document.createElement('li');
    li.textContent = navbar.replace(/-/g, ' ');
    li.onclick = () => {
        navbarIframe.src = `navbars/${navbar}/index.html`;
    };
    ul.appendChild(li);
});

navbarList.appendChild(ul);