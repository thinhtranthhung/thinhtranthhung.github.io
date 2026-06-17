// 1. Typing Effect for Hero Section
const typingText = document.getElementById("typing-text");
const phrases = ["Computer Science Student", "Cybersecurity Enthusiast", "Backend Developer"];let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before starting new word
    }

    setTimeout(type, typeSpeed);
}
// Start typing effect on load
document.addEventListener("DOMContentLoaded", type);

// 2. Hide/Show Navbar on Scroll (Make it look professional)
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll down
        header.style.transform = "translateY(-100%)";
    } else {
        // Scroll up
        header.style.transform = "translateY(0)";
        if (scrollTop > 50) {
            header.style.boxShadow = "0 10px 30px -10px rgba(2,12,27,0.7)";
        } else {
            header.style.boxShadow = "none";
        }
    }
    lastScrollTop = scrollTop;
});

// 3. Reveal Elements on Scroll using Intersection Observer (Modern & performant)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));