document.addEventListener('DOMContentLoaded', function () {
    const versionTitles = document.querySelectorAll('.version-title');
    
    versionTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'flex';
                this.classList.add('active');
            } else {
                content.style.display = 'none';
                this.classList.remove('active');
            }
        });
    });
});
