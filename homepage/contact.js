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

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dots = document.querySelectorAll(".dots li");
const list = document.querySelector(".list");
let currentIndex = 0; // Starting index of the image

// Array of images
const totalSlides = document.querySelectorAll(".item").length;

function updateSlider() {
    // Move the slider by shifting the items based on the current index
    list.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update the active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

// slideshow//
// Set the interval time (in milliseconds)
const intervalTime = 10000; // 5 seconds

// Function to automatically go to the next slide
const autoSlide = () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
};

// Start the automatic slide transition
const slideInterval = setInterval(autoSlide, intervalTime);

// Event listeners for buttons
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
    resetAutoSlide(); // Reset the auto slide interval on manual interaction
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
    resetAutoSlide(); // Reset the auto slide interval on manual interaction
});

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
        resetAutoSlide(); // Reset the auto slide interval on manual interaction
    });
});

// Function to reset the auto slide interval
const resetAutoSlide = () => {
    clearInterval(slideInterval);
    setInterval(autoSlide, intervalTime);
};