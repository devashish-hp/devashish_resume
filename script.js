document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const toggleButton = document.getElementById('dark-mode-toggle');
    const icon = toggleButton.querySelector('i');

    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        html.classList.remove('dark');
        html.classList.add('light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Toggle theme
    toggleButton.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            html.classList.add('light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.remove('light');
            html.classList.add('dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Scroll animation for fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});