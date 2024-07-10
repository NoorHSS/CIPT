// Show the search bar and animate the logo
document.getElementById("search-button").addEventListener("click", function() {
    let logo = document.getElementById("center-logo");
    let mainLogo = document.getElementById("main-logo");
    let searchContent = document.getElementById("search-content");
    logo.classList.add("flip");
    setTimeout(function() {
        logo.classList.add("slide-up");
        mainLogo.classList.add("resize");
        searchContent.style.display = "inline-block";
    }, 600); // Timing to match the flip animation
    setTimeout(function() {
        document.getElementById("search-bar-container").style.display = "flex";
        document.getElementById("search-input").focus();
    }, 1000); // Timing to match the slide-up animation
});


// Handle search input
document.getElementById("search-input").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";
    if (query) {
        fetch("/pip/search.json")
            .then(response => response.json())
            .then(data => {
                let results = data.filter(item => item.content.toLowerCase().includes(query));
                results.slice(0, 7).forEach(result => { // only 7 results
                    let item = document.createElement("div");
                    item.classList.add("search-result-item");
                    item.innerHTML = `<a href="javascript:void(0);" data-link="${result.url}">${result.title}</a>`;
                    resultsContainer.appendChild(item);
                });

                // Add click event listener to search result items
                document.querySelectorAll(".search-result-item a").forEach(link => {
                    link.addEventListener("click", function() {
                        let url = this.getAttribute("data-link");
                        loadContent(url);
                    });
                });
            });
        resultsContainer.style.display = "block";
    } else {
        resultsContainer.style.display = "none";
    }
});

// Load content in the main container
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let mainContent = document.getElementById("main-content");
            mainContent.innerHTML = `<button id="close-button">&times;</button>` + data;
            mainContent.style.display = "block";

            // Add close button functionality
            document.getElementById("close-button").addEventListener("click", function() {
                mainContent.style.display = "none";
            });
        });
}

// Hide search bar and show logo when other main buttons are clicked
document.querySelectorAll(".main-button").forEach(button => {
    button.addEventListener("click", function() {
        if (button.id !== "search-button") {
            let logo = document.getElementById("center-logo");
            let mainLogo = document.getElementById("main-logo");
            document.getElementById("center-logo").classList.remove("flip", "slide-up");
            mainLogo.classList.remove("resize");
            logo.style.top = '50%';
            logo.style.width = '200px';
            logo.style.height = '200px';
            document.getElementById("center-logo").style.display = "flex";
            document.getElementById("search-bar-container").style.display = "none";
            document.getElementById("search-results").style.display = "none";
            document.getElementById("search-content").style.display = "none";
            document.getElementById("main-content").style.display = "none";
        }
    });
});