
document.addEventListener('DOMContentLoaded', () => {
    const navbarGrid = document.getElementById('navbar-grid');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-button');

    const navbars = [
        { id: 'minimal-navbar', name: 'Minimal Navbar' },
        { id: 'glass-navbar', name: 'Glassmorphism Navbar' },
        { id: 'sticky-navbar', name: 'Sticky Navbar' },
        { id: 'dropdown-navbar', name: 'Dropdown Navbar' },
        { id: 'mega-menu-navbar', name: 'Mega Menu Navbar' },
        { id: 'sidebar-navigation', name: 'Sidebar Navigation' },
        { id: 'animated-navbar', name: 'Animated Navbar' },
        { id: 'blur-backdrop-navbar', name: 'Blur Backdrop Navbar' },
        { id: 'centered-logo-navbar', name: 'Centered Logo Navbar' },
        { id: 'split-navigation', name: 'Split Navigation' },
        { id: 'dark-mode-animated-navbar', name: 'Dark Mode Navbar' },
        { id: 'search-bar-navbar', name: 'Search Navbar' },
        { id: 'floating-navbar', name: 'Floating Navbar' },
        { id: 'neumorphism-navbar', name: 'Neumorphism Navbar' },
        { id: 'bottom-mobile-navbar', name: 'Bottom Mobile Navbar' },
        { id: 'fullscreen-overlay-navbar', name: 'Fullscreen Overlay Navbar' },
        { id: 'social-media-navbar', name: 'Social Media Navbar' },
    ];

    const renderGrid = (items) => {
        navbarGrid.innerHTML = '';
        items.forEach(navbar => {
            const item = document.createElement('div');
            item.className = 'grid-item';
            item.dataset.id = navbar.id;
            item.innerHTML = `
                <div class="preview" style="background-image: url('preview-images/${navbar.id}.png')"></div>
                <div class="info">
                    <h3>${navbar.name}</h3>
                </div>
            `;
            item.addEventListener('click', () => openModal(navbar));
            navbarGrid.appendChild(item);
        });
    };

    const openModal = async (navbar) => {
        const htmlPromise = fetch(`src/navbars/${navbar.id}/index.html`).then(res => res.ok ? res.text() : '');
        const cssPromise = fetch(`src/navbars/${navbar.id}/style.css`).then(res => res.ok ? res.text() : '');
        const jsPromise = fetch(`src/navbars/${navbar.id}/script.js`).then(res => res.ok ? res.text() : '');

        const [html, css, js] = await Promise.all([htmlPromise, cssPromise, jsPromise]);

        modalBody.innerHTML = `
            <div class="navbar-preview">
                <iframe src="src/navbars/${navbar.id}/index.html"></iframe>
            </div>
            <div class="code-container">
                <button class="copy-code-button">Copy Code</button>
                <h2>HTML</h2>
                <pre><code class="language-html">${escapeHtml(html)}</code></pre>
                <h2>CSS</h2>
                <pre><code class="language-css">${escapeHtml(css)}</code></pre>
                ${js ? `<h2>JavaScript</h2><pre><code class="language-javascript">${escapeHtml(js)}</code></pre>` : ''}
            </div>
        `;

        modal.style.display = 'block';
        hljs.highlightAll();

        const copyButton = modalBody.querySelector('.copy-code-button');
        copyButton.addEventListener('click', () => {
            const fullCode = `<!-- HTML -->\n${html}\n\n<!-- CSS -->\n<style>\n${css}\n</style>\n\n` + (js ? `<!-- JavaScript -->\n<script>\n${js}\n</script>` : '');
            navigator.clipboard.writeText(fullCode).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => { copyButton.textContent = 'Copy Code'; }, 2000);
            });
        });
    };

    closeModal.onclick = () => { modal.style.display = "none"; };
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredNavbars = navbars.filter(navbar => navbar.name.toLowerCase().includes(searchTerm));
        renderGrid(filteredNavbars);
    });

    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Initial render
    renderGrid(navbars);
});
