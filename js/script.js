// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');// Get the toggle button
darkModeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
     // Change button text based on current mode
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Section animation on scroll
const sections = document.querySelectorAll('section h2');
// Observer options for Intersection Observer API
const options = {
    root: null,// Use viewport as the root
    threshold: 0.1,// Trigger when 10% of the element is visible
    rootMargin: '0px',// No margin
};

//Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';// Start the animation when in view
            observer.unobserve(entry.target);// Stop observing the element after animation starts
        }
    });
}, options);

//obeserve each section header
sections.forEach(section => {
    observer.observe(section);
});
