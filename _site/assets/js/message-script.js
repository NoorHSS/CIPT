document.addEventListener('DOMContentLoaded', function () {
    var messages = [
        { category: 'Welcome', text: 'Welcome to CIPT, I wish you a good day.', displayOnce: true },
        { category: 'Hint', text: 'Manage your capital well and don’t be greedy.', displayOnce: false },
        { category: 'News', text: 'CIPT Version 2.1 has been released, you can download it now you can download it immediately from the website.', displayOnce: false },
        { category: 'Warning', text: 'Trading without a plan will take your wallet to hell.', displayOnce: false },
        { category: 'Congrats', text: 'Happy New Year', dateRange: { start: '2024-12-29', end: '2025-01-01' }, displayOnce: false }
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

    var messageText = document.getElementById('message-text');
    var displayedMessages = new Set();
    var currentIndex = 0;

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            messageText.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, callback);
            }, 50);
        } else if (typeof callback === 'function') {
            setTimeout(callback, 700);
        }
    }

    function showNextMessage() {
        var now = new Date();
        var currentMessage = messages[currentIndex];

        if (currentMessage.dateRange) {
            var startDate = new Date(currentMessage.dateRange.start);
            var endDate = new Date(currentMessage.dateRange.end);
            if (now < startDate || now > endDate) {
                currentIndex = (currentIndex + 1) % messages.length;
                return showNextMessage();
            }
        }

        if (!currentMessage.displayOnce || !displayedMessages.has(currentMessage.text)) {
            var icon = '<i class="material-icons ' + categoryClasses[currentMessage.category] + '">' + categoryIcons[currentMessage.category] + '</i>';
            var fullMessage = icon + " " + currentMessage.text;
            displayedMessages.add(currentMessage.text);
            typeWriter(fullMessage, 0, function () {
                currentIndex = (currentIndex + 1) % messages.length;
                setTimeout(showNextMessage, 5000);
            });
        } else {
            currentIndex = (currentIndex + 1) % messages.length;
            showNextMessage();
        }
    }

    showNextMessage();
});
