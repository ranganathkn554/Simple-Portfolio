document.addEventListener('DOMContentLoaded', () => {
    // Animate Progress Bars in Skills Section
    const progressBars = document.querySelectorAll('.progress');
    window.addEventListener('scroll', () => {
        const skillsSection = document.getElementById('skills').getBoundingClientRect();
        if (skillsSection.top < window.innerHeight && skillsSection.bottom >= 0) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('style').split(':')[1];
            });
        }
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
