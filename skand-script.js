// Skand Puran Scroll Animation Script
document.addEventListener("DOMContentLoaded", () => {
    const skandElements = document.querySelectorAll(
        '.skand-wrap .skand-shlok, .skand-wrap .skand-info, .skand-wrap .skand-title, .skand-wrap img'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, { threshold: 0.1 });

    skandElements.forEach(el => observer.observe(el));
});