document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.accordion-header');
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
