// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sneaker Carousel
    const carousel = document.getElementById('sneaker-carousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentIndex = 0;
    let interval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }

    // Function to show next slide
    function nextSlide() {
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }

    // Function to show previous slide
    function prevSlide() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        showSlide(newIndex);
    }

    // Set up event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetInterval();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetInterval();
        });
    }

    // Set up event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            resetInterval();
        });
    });

    // Function to start automatic slideshow
    function startInterval() {
        interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Function to reset interval
    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }

    // Initialize carousel
    showSlide(0);
    startInterval();
});
