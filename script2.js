// Toggle Navbar on mobile
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}
document.getElementById('aboutButton').addEventListener('click', function() {
    document.getElementById('aboutSection').classList.add('active');
    document.getElementById('projectSection').classList.remove('active');
});

document.getElementById('projectButton').addEventListener('click', function() {
    document.getElementById('projectSection').classList.add('active');
    document.getElementById('aboutSection').classList.remove('active');
});

