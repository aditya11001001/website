        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');

            // Set up Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Unobserve once it's visible
                    }
                });
            }, {
                threshold: 0.1, // Trigger when 10% of the item is visible
                rootMargin: '0px 0px -40px 0px'
            });

            // Observe each section
            sections.forEach(section => {
                observer.observe(section);
            });
        });
