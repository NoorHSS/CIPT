document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
=======
    // Constants and Variables
>>>>>>> cf2f73f0fa4070dd33910f4f17ebf9046f3d8619
    const mainButtons = document.querySelectorAll('.main-button');
    const subButtonsContainers = document.querySelectorAll('.sub-buttons');
    const languageButtons = document.querySelectorAll('.language-button');
    const storedLanguage = localStorage.getItem('language') || document.documentElement.lang;

<<<<<<< HEAD
=======
    // Functions
>>>>>>> cf2f73f0fa4070dd33910f4f17ebf9046f3d8619
    function setButtonLabels(language) {
        mainButtons.forEach(button => {
            const enLabel = button.getAttribute('data-en-label');
            const arLabel = button.getAttribute('data-ar-label');
            const labelElement = button.querySelector('.button-label');
            if (language === 'ar') {
                labelElement.textContent = arLabel;
            } else {
                labelElement.textContent = enLabel;
            }
        });
<<<<<<< HEAD

        const subButtons = document.querySelectorAll('.sub-button');
        subButtons.forEach(button => {
            const enLabel = button.getAttribute('data-en-label');
            const arLabel = button.getAttribute('data-ar-label');
            const labelElement = button.querySelector('.sub-button-label');
            if (language === 'ar') {
                labelElement.textContent = arLabel;
            } else {
                labelElement.textContent = enLabel;
            }
        });
=======
>>>>>>> cf2f73f0fa4070dd33910f4f17ebf9046f3d8619
    }

    function setLanguage(language) {
        document.documentElement.lang = language;
        localStorage.setItem('language', language);
        setButtonLabels(language);
        updateButtonURLs(language);
    }

    function updateButtonURLs(language) {
        mainButtons.forEach(button => {
            const href = button.getAttribute('href');
            if (href && !href.includes('#')) {
                const newHref = href.replace(/\/(en|ar)\//, `/${language}/`);
                button.setAttribute('href', newHref);
            }
        });

        const subButtons = document.querySelectorAll('.sub-button');
        subButtons.forEach(button => {
            const href = button.getAttribute('href');
            if (href && !href.includes('#')) {
                const newHref = href.replace(/\/(en|ar)\//, `/${language}/`);
                button.setAttribute('href', newHref);
            }
        });
    }

<<<<<<< HEAD
    setLanguage(storedLanguage);

=======
    // Initial Setup
    setLanguage(storedLanguage);

    // Event Listeners
>>>>>>> cf2f73f0fa4070dd33910f4f17ebf9046f3d8619
    mainButtons.forEach(button => {
        if (button.nextElementSibling && button.nextElementSibling.classList.contains('sub-buttons')) {
            button.classList.add('has-sub');
            button.addEventListener('click', function(event) {
                const subButtons = this.nextElementSibling;
                const isVisible = subButtons.style.display === 'flex';
                mainButtons.forEach(btn => {
                    btn.classList.remove('expanded');
                });
                subButtonsContainers.forEach(container => {
                    container.style.display = 'none';
                });

                if (!isVisible) {
                    subButtons.style.display = 'flex';
                    subButtons.style.position = 'absolute';
                    subButtons.style.right = '180px';
                    subButtons.style.top = this.offsetTop + 'px';
                    this.classList.add('expanded');
                } else {
                    subButtons.style.display = 'none';
                }
                event.stopPropagation();
            });
        } else {
            button.addEventListener('click', function(event) {
                subButtonsContainers.forEach(container => {
                    container.style.display = 'none';
                });
                mainButtons.forEach(btn => {
                    btn.classList.remove('expanded');
                });
            });
        }
    });

    document.addEventListener('click', function() {
        subButtonsContainers.forEach(container => {
            container.style.display = 'none';
        });
        mainButtons.forEach(btn => {
            btn.classList.remove('expanded');
        });
    });

    subButtonsContainers.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    languageButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const path = this.getAttribute('data-path');
            const language = path.includes('/ar/') ? 'ar' : 'en';
            setLanguage(language);
            window.location.href = path;
        });
    });
});
