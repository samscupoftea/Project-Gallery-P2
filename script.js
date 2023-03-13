// Get all the project cards
const headers = document.querySelectorAll('.projectcard h5, .projectcard h4');

// Define an array of URLs for each project
const projectUrls = [
  'https://samscupoftea.github.io/My-First-Repo/',
  'https://samscupoftea.github.io/Project-Gallery-P2/',
  'https://samscupoftea.github.io/Movie-Data-P3/',
  'https://samscupoftea.github.io/Website-P4/',
  'https://samscupoftea.github.io/Game-P5/'
];

// Add a click event listener to each project card header
headers.forEach((header, index) => {
  header.addEventListener('click', (event) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Get the corresponding URL for the clicked project card
    const projectUrl = projectUrls[index];

    // Toggle the visibility of the description text
    const description = header.nextElementSibling;
    description.classList.toggle('show');

    // Redirect the user to the URL for the clicked project card
    window.location.href = projectUrl;
  });
});


// Add click event listeners to all the "Show Description" buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {

    // Get the description element for this project card
    const description = button.closest('.projectcard').querySelector('.description');

    // Toggle the visibility of the description
    description.classList.toggle('show');

    // Update the button text to show/hide the description
    button.textContent = description.classList.contains('show') ? 'Hide Description' : 'Show Description';
  });
});

function toggleDescription(event, descriptionClass) {
  const description = event.target.parentNode.querySelector('.' + descriptionClass);
  if (description.style.display === "none") {
      description.style.display = "block";
      event.target.textContent = "Hide Description";
  } else {
      description.style.display = "none";
      event.target.textContent = "Show Description";
  }
}


