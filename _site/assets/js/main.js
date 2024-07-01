document.addEventListener('DOMContentLoaded', function () {
    function showMainContent() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto';
    }

    const loadingScreen = document.getElementById('loading-screen');

    loadingScreen.addEventListener('transitionend', showMainContent);

    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        showMainContent();
    }, 5000);
});
