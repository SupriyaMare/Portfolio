 // Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default navigation
        
        // Get target section
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Smooth scroll to target
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu after click
        navLinks.classList.remove('active');
    });
});

// Back to top button visibility
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll for "Back to Top" button
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or use default
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

// Update button text based on current theme
updateThemeToggleButton(savedTheme);

// Theme toggle click event
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Set the new theme
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button text
    updateThemeToggleButton(newTheme);
});

// Function to update theme toggle button text
function updateThemeToggleButton(theme) {
    themeToggle.textContent = theme === 'light' ? '🌓' : '☀️';
}

// Fix email link
const emailLink = document.querySelector('a[href="supriyamare27@gmail.com"]');
if (emailLink) {
    emailLink.href = "mailto:supriyamare27@gmail.com";
}

// Fix social links
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('www.')) {
        link.href = 'https://' + href;
    }
});

// Add animations on scroll
const observeElements = document.querySelectorAll('.project-card, .education-card, .skill-tag');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

observeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
});