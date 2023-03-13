// Get all the project cards
const headers = document.querySelectorAll('.projectcard h5 h4 ');

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
headers.forEach(header => {
  header.addEventListener('click', () => {

    // header element 

    const description = header.nextElementSibling;
    description.classList.toggle('show');
    // Redirect the user to the URL for the clicked project card
    window.location.href = projectUrls[index];

    
  });
});


// add button functionality for description box on project cards. 
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const description = button.nextElementSibling;
        description.classList.toggle("show");
        button.textContent = description.classList.contains("show") ? "Hide Description" : "Show Description";
    });
});

function toggleDescription(descriptionId) {
  var description = document.getElementById(descriptionId);
  if (description.style.display === "none") {
      description.style.display = "block";
      event.target.textContent = "Hide Description";
  } else {
      description.style.display = "none";
      event.target.textContent = "Show Description";
  }
}

