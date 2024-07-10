function typeWriter(text, elementId, delay = 100) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', function() {
    const englishText = "PiP Planner 2024 Designed by Nawras Haswia with Love ❤️";
    const arabicText = "صمم المخطط بيب بواسطة نورس حصوية 2024  ❤️";
    const footerText = document.documentElement.lang === 'ar' ? arabicText : englishText;

    document.getElementById('footer').style.display = 'block';
    setTimeout(() => {
        typeWriter(footerText, 'footer-text');
    }, 500); // Start animation after 500ms
});
