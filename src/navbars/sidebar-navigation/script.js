const openBtn = document.querySelector('.open-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

openBtn.addEventListener('click', () => {
    sidebar.style.width = '250px';
    mainContent.style.marginLeft = '250px';
});

// A close button would typically be added to the sidebar HTML
// For this example, we'll just open it.
