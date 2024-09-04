document.addEventListener('DOMContentLoaded', function () {
    // Handle search form submission
    document.getElementById('search-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const query = document.getElementById('search-query').value.trim();
        if (query) {
            displaySearchResults(query);
        } else {
            alert('Please enter a search query.');
        }
    });

    // Display search results
    function displaySearchResults(query) {
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = `<h3>Search Results for "${query}"</h3>`;

        // Simulate search results
        const results = [
            { title: 'Result 1', description: 'Description for result 1' },
            { title: 'Result 2', description: 'Description for result 2' },
            { title: 'Result 3', description: 'Description for result 3' }
        ];

        if (results.length === 0) {
            resultsDiv.innerHTML += `<p>No results found for "${query}".</p>`;
            return;
        }

        results.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'search-result';
            resultDiv.style.opacity = 0; // Start with invisible
            resultDiv.innerHTML = `
                <h4>${result.title}</h4>
                <p>${result.description}</p>
            `;
            resultsDiv.appendChild(resultDiv);

            // Animate result appearance
            setTimeout(() => {
                resultDiv.style.opacity = 1;
                resultDiv.style.transform = 'translateY(0)'; // Reset transform
            }, 50);
        });
    }

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`Logging in with Username: ${username}`);
        // Add authentication logic here
    });
});

// Search functionality
function search() {
    // Get the search input value
    const query = document.getElementById('search-input').value.toLowerCase();
    
    // Get all product elements
    const products = document.querySelectorAll('.product');
    
    // Loop through products and hide/show based on search query
    let found = false;
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || description.includes(query)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });

    // Show message if no products match
    const noResultsMessage = document.getElementById('no-results-message');
    if (noResultsMessage) {
        noResultsMessage.style.display = found ? 'none' : 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("login-modal");

    // Get the button that opens the modal
    var btn = document.getElementById("login-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        modal.classList.add("fade-in"); // Add animation class
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.classList.remove("fade-in"); // Remove animation class
        modal.classList.add("fade-out"); // Add fade-out animation
        setTimeout(() => { modal.style.display = "none"; }, 300); // Delay hiding until animation completes
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            span.onclick(); // Close modal with animation
        }
    }
});
