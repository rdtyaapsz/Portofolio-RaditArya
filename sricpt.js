// Smooth scrolling already added
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect to profile photo
const profilePhoto = document.querySelector('.profile-photo');
profilePhoto.addEventListener('mouseover', () => {
    profilePhoto.style.transform = 'scale(1.1)';
    profilePhoto.style.transition = 'transform 0.4s ease-in-out';
});

profilePhoto.addEventListener('mouseout', () => {
    profilePhoto.style.transform = 'scale(1)';
});

// Add fade-in effect on scroll
const sections = document.querySelectorAll('.about-section, .education-section, .experience-section, .hobi-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Add fade-in class for animation
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s ease-in-out';
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.about-section, .education-section, .experience-section, .hobi-section').forEach(el => {
        el.classList.add('fade-in');
    });
});
