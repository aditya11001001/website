// Apple Support Replica Interactive Elements

document.addEventListener('DOMContentLoaded', () => {
    // Search bar visual interactions
    const searchInput = document.getElementById('supportSearch');
    const searchContainer = document.querySelector('.search-container');

    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchContainer.style.transform = 'scale(1.02)';
            searchContainer.style.transition = 'transform 0.3s ease';
        });

        searchInput.addEventListener('blur', () => {
            searchContainer.style.transform = 'scale(1)';
        });
    }

    // Add subtle reveal animations for products
    const products = document.querySelectorAll('.product-item');
    products.forEach((product, index) => {
        product.style.opacity = '0';
        product.style.transform = 'translateY(10px)';
        product.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
        
        setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, 100);
    });

    // Mobile Hamburger Menu
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navList = document.getElementById('navList');

    if (mobileMenuToggle && navList) {
        const icon = mobileMenuToggle.querySelector('i');
        icon.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

        mobileMenuToggle.addEventListener('click', () => {
            navList.classList.toggle('active-mobile');
            document.querySelector('.global-nav').classList.toggle('menu-open');
            
            // Spin animation
            icon.style.transform = 'rotate(90deg)';
            icon.style.opacity = '0';
            
            setTimeout(() => {
                if (navList.classList.contains('active-mobile')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
                icon.style.transform = 'rotate(0deg)';
                icon.style.opacity = '1';
            }, 150);
        });
    }

    // Call Popup Logic
    const popup = document.getElementById('callPopup');
    const closeBtn = document.getElementById('closePopup');

    // Intersection Observer for scroll-reveal animations
    const revealBlocks = document.querySelectorAll('.reveal-block');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealBlocks.forEach(block => revealObserver.observe(block));

    if (popup && closeBtn) {
        // 1. Show popup 800ms after the page loads
        setTimeout(function () {
            popup.style.display = 'flex';
        }, 800);

        // 2. Close the popup when the 'X' button is clicked
        closeBtn.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        // 3. Optional: Close if user clicks strictly outside the popup window
        popup.addEventListener('click', function (e) {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});
