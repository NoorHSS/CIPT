// Typing animation function
export function typeWriter(text, element, delay = 50) {
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

// Function to reset to the original state without refreshing
export function resetToOriginalState() {
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
