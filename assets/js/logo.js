import { typeWriter } from './developer.js';

export function handleAboutButtonClick() {
    const logo = document.getElementById("main-logo");
    const developerImgContainer = document.getElementById("developer-img");
    const aboutTitle = document.querySelector(".about-title");
    const aboutContentContainer = document.getElementById("about-content-container");
    const aboutContent = document.querySelector(".about-text");

    // Perform six quick flips
    flipLogo(6, logo, developerImgContainer, () => {
        // Show about content container
        aboutContentContainer.style.display = "block";
        aboutTitle.style.display = "block";
        const text = aboutContent.getAttribute('data-text'); 
        typeWriter(text, aboutContent);
    });
}

// Function to perform a single flip
function flipLogo(times, logo, developerImgContainer, callback) {
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
