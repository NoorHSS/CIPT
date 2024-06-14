<script>
    document.addEventListener('DOMContentLoaded', function () {
        var searchInput = document.getElementById('search-input');

        searchInput.addEventListener('input', function () {
            var query = searchInput.value.toLowerCase();
            console.log('Search query:', query); // Debugging: Log the search query
            var searchResults = [];

            fetch('{{ site.baseurl }}/search.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Fetched data:', data); // Debugging: Log the fetched data
                    data.forEach(page => {
                        if (page.title.toLowerCase().includes(query) ||
                            page.content.toLowerCase().includes(query)) {
                            searchResults.push(page);
                        }
                    });

                    console.log('Search results:', searchResults); // Debugging: Log the search results
                    displaySearchResults(searchResults);
                })
                .catch(error => {
                    console.error('Fetch error:', error); // Debugging: Log any fetch errors
                });
        });

        function displaySearchResults(results) {
            var resultsContainer = document.getElementById('search-results');
            resultsContainer.innerHTML = '';

            if (results.length > 0) {
                results.forEach(result => {
                    var resultItem = document.createElement('div');
                    resultItem.classList.add('search-result');

                    var title = document.createElement('h3');
                    var link = document.createElement('a');
                    link.href = result.url;
                    link.textContent = result.title;
                    title.appendChild(link);
                    resultItem.appendChild(title);

                    var content = document.createElement('p');
                    content.textContent = result.content.substring(0, 150) + '...';
                    resultItem.appendChild(content);

                    resultsContainer.appendChild(resultItem);
                });
            } else {
                resultsContainer.innerHTML = '<p>No results found</p>';
            }
        }
    });
</script>
