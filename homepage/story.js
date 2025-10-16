function onMenuClick() {
    const navBar = document.getElementById('navigation-bar');
    navBar.classList.toggle('responsive'); // Toggle the menu visibility
}

// Add active class to the clicked link
const navLinks = document.querySelectorAll('.nav-bar a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active')); // Remove active from all links
        this.classList.add('active'); // Add active to clicked link
    });
});