export const setupScrollAnimations = () => {
    const sections = document.querySelectorAll<HTMLElement>('.section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    sections.forEach((section) => {
        section.classList.add('slide-up');
        observer.observe(section);
    });
};