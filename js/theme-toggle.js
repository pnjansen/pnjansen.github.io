// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeIcons = document.querySelectorAll('.theme-toggle i');
    
    // Check for saved theme preference or use default light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on initial load
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcons.forEach(icon => {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        });
    }
    
    // Function to toggle theme
    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            // Switch to light theme
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            themeIcons.forEach(icon => {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            });
        } else {
            // Switch to dark theme
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeIcons.forEach(icon => {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            });
        }
    }
    
    // Add event listeners to theme toggle buttons
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
});
