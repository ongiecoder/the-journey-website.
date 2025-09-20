// ====== Navbar Section Navigation ======
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".content-section");
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Function to show a section
function showSection(sectionId) {
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.add('active'); // Show this section
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    } else {
      section.classList.remove('active'); // Hide other sections
    }
  });
}

// Add click event to navbar links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default hash jump
    const sectionId = link.getAttribute('data-section');
    showSection(sectionId);

    // Close mobile menu after clicking
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

