// Get all the project cards
const projectCards = document.querySelectorAll('.projectcard');

// Define an array of URLs for each project
const projectUrls = [
  'https://samscupoftea.github.io/My-First-Repo/',
  'https://example.com/project2',
  'https://example.com/project3',
  'https://example.com/project4',
  'https://example.com/project5'
];

// Add a click event listener to each project card
projectCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Redirect the user to the URL for the clicked project card
    window.location.href = projectUrls[index];
  });
});
