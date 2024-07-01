document.addEventListener('DOMContentLoaded', function () {
    fetch(siteBaseUrl + '/assets/js/messages.json')
        .then(response => response.json())
        .then(translations => {
            // Detect current language
            var currentLang = document.documentElement.lang || 'en';

            // Define messages
            var messages = [
                { category: 'Welcome', text: translations[currentLang].Welcome },
                { category: 'Hint', text: translations[currentLang].Hint1 },
                { category: 'News', text: translations[currentLang].News },
                { category: 'Hint', text: translations[currentLang].Hint2 },
                { category: 'Congrats', text: translations[currentLang].Congrats }
            ];

            var categoryIcons = {
                'Welcome': 'volunteer_activism',
                'Hint': 'emoji_objects',
                'Warning': 'warning',
                'Congrats': 'yard',
                'News': 'downloading'
            };

            var categoryClasses = {
                'Welcome': 'icon-welcome',
                'Hint': 'icon-hint',
                'Warning': 'icon-warning',
                'Congrats': 'icon-congrats',
                'News': 'icon-news'
            };

            var messageList = document.getElementById('message-list');

            let currentMessageIndex = 0;

            function showNextMessage() {
                if (currentMessageIndex < messages.length) {
                    var message = messages[currentMessageIndex];
                    var messageItem = document.createElement('div');
                    messageItem.classList.add('message-item');

                    var categoryContainer = document.createElement('div');
                    categoryContainer.classList.add('category-container');

                    var category = document.createElement('div');
                    category.classList.add('category');
                    category.innerText = 'Mr. PiP';

                    var categoryIcon = document.createElement('i');
                    categoryIcon.classList.add('material-icons', categoryClasses[message.category]);
                    categoryIcon.innerText = categoryIcons[message.category];

                    categoryContainer.appendChild(category);
                    categoryContainer.appendChild(categoryIcon);

                    var text = document.createElement('div');
                    text.classList.add('text');
                    text.innerText = message.text;

                    var readIcon = document.createElement('i');
                    readIcon.classList.add('material-icons', 'read-icon');
                    readIcon.innerText = 'done_all';

                    messageItem.appendChild(categoryContainer);
                    messageItem.appendChild(text);
                    messageItem.appendChild(readIcon);

                    messageList.appendChild(messageItem);

                    currentMessageIndex++;
                    setTimeout(showNextMessage, 3000);
                } else {
                    setTimeout(() => {
                        messageList.innerHTML = '';
                        currentMessageIndex = 0;
                        showNextMessage();
                    }, 3000);
                }
            }

            showNextMessage();
        });
});
