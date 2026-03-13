document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('show');
    });

    // Mobile Dropdown Toggle
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevent default link behavior if any
                
                const dropdown = btn.parentElement;
                const menu = dropdown.querySelector('.dropdown-menu');
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';

                // Close all other dropdowns
                dropdownBtns.forEach(otherBtn => {
                    if (otherBtn !== btn) {
                        const otherDropdown = otherBtn.parentElement;
                        otherBtn.setAttribute('aria-expanded', 'false');
                        otherDropdown.classList.remove('active');
                        otherDropdown.querySelector('.dropdown-menu').classList.remove('show');
                    }
                });

                // Toggle current dropdown
                btn.setAttribute('aria-expanded', !isExpanded);
                dropdown.classList.toggle('active');
                menu.classList.toggle('show');
            }
        });
    });

    // Reset layout on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            mobileToggle.setAttribute('aria-expanded', 'false');
            
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.dropdown-btn').setAttribute('aria-expanded', 'false');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        }
    });
});
