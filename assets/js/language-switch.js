document.addEventListener('DOMContentLoaded', function() {
    console.log("Language switch JavaScript is running");

    fetch(siteBaseUrl + '/assets/js/messages.json')
        .then(response => response.json())
        .then(translations => {
            const mainButtons = document.querySelectorAll('.main-button');
            const subButtonsContainers = document.querySelectorAll('.sub-buttons');
            const langButtons = document.querySelectorAll('.language-button');

            // Determine the current language based on the URL
            const currentLang = window.location.pathname.includes("/ar/") ? "ar" : "en";
            console.log("Current language:", currentLang);

            // Function to update button labels and paths
            function updateButton(button, isSubButton = false) {
                const labelClass = isSubButton ? ".sub-button-label" : ".button-label";
                const label = button.querySelector(labelClass);
                const newLabel = currentLang === "ar" ? button.dataset.arLabel : button.dataset.enLabel;
                console.log(`Updating button label to: ${newLabel}`);
                label.textContent = newLabel;

                // Update the href to include the correct language path
                let path = button.getAttribute("href");
                if (path && !path.includes("/ar/") && !path.includes("/en/")) {
                    if (path.startsWith(siteBaseUrl)) {
                        path = path.replace(siteBaseUrl, "");
                    }
                    button.setAttribute("href", `${siteBaseUrl}/${currentLang}${path}`);
                }
            }

            // Update the labels and paths for the main buttons
            mainButtons.forEach(button => updateButton(button));

            // Update the labels and paths for the sub-buttons
            const subButtons = document.querySelectorAll(".sub-button");
            subButtons.forEach(button => updateButton(button, true));

            // Update the language buttons to navigate to the correct paths
            langButtons.forEach(button => {
                button.setAttribute("href", `${siteBaseUrl}${button.dataset.path}`);
            });

            // Update the loading screen text
            const loadingText = document.querySelector('.loading-text');
            const readyMessage = document.querySelector('.ready-message');

            loadingText.textContent = currentLang === "ar" ? loadingText.dataset.arText : loadingText.dataset.enText;
            readyMessage.textContent = currentLang === "ar" ? readyMessage.dataset.arText : readyMessage.dataset.enText;
        });
});
