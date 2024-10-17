// // Array of perfume names
// const perfumes = [
//     "Chanel No. 5",
//     "Dior J'adore",
//     "Yves Saint Laurent Black Opium",
//     "Gucci Bloom",
//     "Tom Ford Oud Wood",
//     "Versace Bright Crystal",
//     "Jo Malone English Pear & Freesia",
//     "Armani Si",
//     "Lancome La Vie Est Belle"
// ];

// // Get references to input, button, and results div
// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');
// const resultsDiv = document.getElementById('results');

// // Function to search and display results
// function searchPerfumes() {
//     // Get the search query
//     const query = searchInput.value.toLowerCase();
//     // Filter perfumes that include the search query
//     const filteredPerfumes = perfumes.filter(perfume =>
//         perfume.toLowerCase().includes(query)
//     );

//     // Display the results
//     resultsDiv.innerHTML = '';
//     if (filteredPerfumes.length > 0) {
//         filteredPerfumes.forEach(perfume => {
//             const perfumeElement = document.createElement('p');
//             perfumeElement.textContent = perfume;
//             resultsDiv.appendChild(perfumeElement);
//         });
//     } else {
//         resultsDiv.textContent = 'No perfumes found.';
//     }
// }

// // Add event listener to the button
// searchButton.addEventListener('click', searchPerfumes);

// // Optional: Trigger search when pressing 'Enter' in the input field
// searchInput.addEventListener('keyup', (event) => {
//     if (event.key === 'Enter') {
//         searchPerfumes();
//     }
// });

// Array of perfume names
const perfumes = [
    "Chanel No. 5",
    "Dior J'adore",
    "Armani Si",
    "Lancome La Vie Est Belle",
    "Armani - My way",
    "YSL - Libre",
    "Jean Paul Gaultier - Scandal",
    "Carolima Herrera - Good Girl",
    "Prada - Prada Paradox",
    "YSL - Black Opium ",
    "Dior - Miss Dior",
    "Prada - Candy",
    "Paris Hillton",
    "Kilian - Good Girl Gone Bad",
    "Victoria Secret - Love is heavenly",
    "Tizania Terenzi - Orza",
    "Mugler - Alien",
    "Dior - Hypnotic Poison",
    "Roberto Cavalli - Just Cavalli ",
    "Gucci - Gucci Rush",
    "Dolce & Gabbana - D&G",
    "Versace - Bright Crystal",
    "Dolce & Gabbana - L'eau the one",
    "Moschino - Gold Fresh Couture",
    "Carolina Herrera - 212 Sexy",




];

// Get references to input, suggestions div, and results div
const searchInput = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('suggestions');
const resultsDiv = document.getElementById('results');

// Function to search and display results
function searchPerfumes(query) {
    // Filter perfumes that include the search query
    const filteredPerfumes = perfumes.filter(perfume =>
        perfume.toLowerCase().includes(query)
    );

    // Display the results
    resultsDiv.innerHTML = '';
    if (filteredPerfumes.length > 0) {
        filteredPerfumes.forEach(perfume => {
            const perfumeElement = document.createElement('p');
            perfumeElement.textContent = perfume;
            resultsDiv.appendChild(perfumeElement);
        });
    } else {
        resultsDiv.textContent = 'No perfumes found.';
    }
}

// Function to display suggestions as user types
function showSuggestions() {
    const query = searchInput.value.toLowerCase();

    // Clear previous suggestions
    suggestionsDiv.innerHTML = '';

    if (query) {
        // Filter perfumes based on the query
        const filteredPerfumes = perfumes.filter(perfume =>
            perfume.toLowerCase().includes(query)
        );

        // Display suggestions
        filteredPerfumes.forEach(perfume => {
            const suggestionElement = document.createElement('p');
            suggestionElement.textContent = perfume;

            // Add click event to suggestion for auto-fill and search
            suggestionElement.addEventListener('click', () => {
                searchInput.value = perfume;
                suggestionsDiv.innerHTML = ''; // Clear suggestions
                searchPerfumes(query); // Display the search results
            });

            suggestionsDiv.appendChild(suggestionElement);
        });
    }
}

// Add event listener to the input field to show suggestions
searchInput.addEventListener('input', showSuggestions);

// Optional: Trigger search when pressing 'Enter' in the input field
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.toLowerCase();
        searchPerfumes(query);
        suggestionsDiv.innerHTML = ''; // Clear suggestions
    }
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const scrollBtn = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block"; // Show the button
  } else {
    scrollBtn.style.display = "none"; // Hide the button
  }
}

// Smooth scroll to top when the button is clicked
document.getElementById("scrollUpBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});









// document.getElementById('order-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the default way

//     // Collect form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const perfume = document.getElementById('perfume').value;
//     const quantity = document.getElementById('quantity').value;
//     const message = document.getElementById('message').value;

//     // Create an object with the data
//     const orderDetails = {
//         name: name,
//         email: email,
//         perfume: perfume,
//         quantity: quantity,
//         message: message
//     };

//     // Send the data to the PHP script using fetch
//     fetch('order.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams(orderDetails)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response from PHP
//         if (data.status === 'success') {
//             alert(data.message);
//             document.getElementById('order-form').reset(); // Reset form fields on success
//         } else {
//             alert('Error: ' + data.message);
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('An error occurred while placing the order. Please try again.');
//     });
// });
// // fetch('backend/order.php', {
// //     method: 'POST',
// //     headers: {
// //         'Content-Type': 'application/x-www-form-urlencoded',
// //     },
// //     body: new URLSearchParams(orderDetails)
// // })
