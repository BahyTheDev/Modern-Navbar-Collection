document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-links li');
    const bottomNav = document.querySelector('.bottom-nav');
    const indicator = document.querySelector('.indicator');

    // Function to calculate and set indicator position
    function setIndicator(item) {
        // Find the index
        const index = item.getAttribute('data-index');
        
        // Calculate position based on width
        const itemWidth = 100 / navItems.length;
        const leftPosition = index * itemWidth;
        
        // Move indicator
        indicator.style.left = `${leftPosition}%`;
        indicator.style.width = `${itemWidth}%`;
        
        // Add style hook for CSS 
        bottomNav.classList.add('has-active');
    }

    // Initialize with first active item
    const activeItem = document.querySelector('.nav-links li.active');
    if (activeItem) {
        setIndicator(activeItem);
    }

    // Click handling
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');
            
            setIndicator(item);
        });
    });

    // Resize handling (though mostly standard %-based CSS)
    window.addEventListener('resize', () => {
        const currentActive = document.querySelector('.nav-links li.active');
        if (currentActive) {
            setIndicator(currentActive);
        }
    });
});
