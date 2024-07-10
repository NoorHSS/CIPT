document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = document.querySelector('.loading-text');
    const readyMessage = document.querySelector('.ready-message');
    const mainWrapper = document.getElementById('main-wrapper');

    let day = 1;
    let profit = 300; // Initial profit

    function updateLoadingText() {
        if (day <= 60) {
            loadingText.innerHTML = `
                Day ${day}: <span class="loading-profit positive">${profit.toFixed(2)}$</span>
            `;
            profit *= 1.10; //
            day++;
            setTimeout(updateLoadingText, 50); 
        } else {
            loadingScreen.style.transition = 'all 0.5s ease-in-out';
            loadingScreen.style.filter = 'blur(10px)';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainWrapper.style.display = 'block';
                document.body.style.overflow = 'auto';
            }, 500);
        }
    }

    setTimeout(updateLoadingText, 10); // Initial delay
});
