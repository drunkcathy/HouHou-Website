function onMenuClick() {
    const navBar = document.getElementById('navigation-bar');
    navBar.classList.toggle('responsive'); 
}

const navLinks = document.querySelectorAll('.nav-bar a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active')); 
        this.classList.add('active'); 
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    
 
    function scrollRight() {
        scrollContainer.scrollLeft += 100;
    }


    function scrollLeft() {
        scrollContainer.scrollLeft -= 100;
    }

   
    document.querySelector('#scrollRightBtn').addEventListener('click', scrollRight);
    document.querySelector('#scrollLeftBtn').addEventListener('click', scrollLeft);
});

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dots = document.querySelectorAll(".dots li");
const list = document.querySelector(".list");
let currentIndex = 0;


const totalSlides = document.querySelectorAll(".item").length;

function updateSlider() {
  
    list.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}


const intervalTime = 10000; // 5 seconds


const autoSlide = () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
};


const slideInterval = setInterval(autoSlide, intervalTime);

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
    resetAutoSlide(); 
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider();
    resetAutoSlide(); 
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
        resetAutoSlide(); 
    });
});


const resetAutoSlide = () => {
    clearInterval(slideInterval);
    setInterval(autoSlide, intervalTime);
};
