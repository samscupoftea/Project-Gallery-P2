// Get all the project cards
const projectCards = document.querySelectorAll('.projectcard');

// Define an array of URLs for each project
const projectUrls = [
  'https://samscupoftea.github.io/My-First-Repo/',
  'https://samscupoftea.github.io/Project-Gallery-P2/',
  'https://samscupoftea.github.io/Movie-Data-P3/',
  'https://samscupoftea.github.io/Website-P4/',
  'https://samscupoftea.github.io/Game-P5/'
];
//added JS 
// Add a click event listener to each project card
projectCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Redirect the user to the URL for the clicked project card
    window.location.href = projectUrls[index];
  });
});
