document.addEventListener('DOMContentLoaded', () => {
    // Animations for the hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(50px)';
    setTimeout(() => {
        hero.style.transition = 'opacity 1s, transform 1s';
        hero.style.opacity = 1;
        hero.style.transform = 'translateY(0)';
    }, 500);

    // Intersection Observer for other sections
    const sections = document.querySelectorAll('main section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });
});
