document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Handle Active State
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent jump for demo
            
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add to clicked
            this.classList.add('active');
        });
    });
});
