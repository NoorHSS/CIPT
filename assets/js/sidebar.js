// assets/js/sidebar.js

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');

    // Slide in the sidebar on load
    setTimeout(function() {
        sidebar.classList.add('open');
    }, 100); // ensure transition is visible

    toggleButton.addEventListener('click', function() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            sidebar.classList.add('closed');
        } else {
            sidebar.classList.add('open');
            sidebar.classList.remove('closed');
        }
    });
});
