document.getElementById("about-button").addEventListener("click", function () {
    const logo = document.getElementById("main-logo");
    const developerImgContainer = document.getElementById("developer-img");
    const aboutTitle = document.querySelector(".about-title");
    const aboutContentContainer = document.getElementById("about-content-container");
    const aboutContent = document.querySelector(".about-text");

    // Function to perform a single flip
    function flipLogo(times, callback) {
        let count = 0;
        const interval = setInterval(() => {
            if (count < times - 1) {
                logo.style.transition = "transform 0.1s";
                logo.style.transform = `rotateY(${180 * (count + 1)}deg)`;
                count++;
            } else if (count === times - 1) {
                logo.style.transition = "transform 0.1s";
                logo.style.transform = `rotateY(${180 * (count + 1)}deg)`;
                setTimeout(() => {
                    logo.style.display = "none";
                    developerImgContainer.style.display = "block";
                    developerImgContainer.style.transform = "rotateY(0deg)";
                    developerImgContainer.style.transition = "transform 0.5s";
                    developerImgContainer.style.transform = "rotateY(180deg)";
                }, 100);
                count++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 100);
    }

    // Typing animation function
    function typeWriter(text, element, delay = 50) {
        let i = 0;
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

    // Perform six quick flips
    flipLogo(6, () => {
        // Show about content container
        aboutContentContainer.style.display = "block";
        aboutTitle.style.display = "block";
        const text = aboutContent.getAttribute('data-text'); 
        typeWriter(text, aboutContent);
    });
});

// Function to reset to the original state without refreshing
function resetToOriginalState() {
    const logo = document.getElementById("main-logo");
    const developerImgContainer = document.getElementById("developer-img");
    const aboutTitle = document.querySelector(".about-title");
    const aboutContentContainer = document.getElementById("about-content-container");
    
    // Hide the developer's image and show the logo
    developerImgContainer.style.display = "none";
    logo.style.display = "block";
    logo.src = "/pip/logo.png";
    
    // Hide the about content
    aboutTitle.style.display = "none";
    aboutContentContainer.style.display = "none";
}

// Event listeners for other buttons to reset the original state
const otherButtons = document.querySelectorAll('.main-button:not(#about-button)');
otherButtons.forEach(button => {
    button.addEventListener('click', function () {
        resetToOriginalState();
    });
});
