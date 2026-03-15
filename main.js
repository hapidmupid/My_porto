document.addEventListener('DOMContentLoaded', () => {
    
    // Element Variables
    const allNavLinks = document.querySelectorAll('.nav-link');
    const navContainer = document.querySelector('.nav-container');

    // Function 1: Smooth Scroll (Manual implementation)
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Function 2: Scroll Navigation Effect (Glassmorphism effect stronger on scroll)
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            navContainer.style.paddingTop = '10px';
            navContainer.style.transition = 'all 0.4s ease';
        } else {
            navContainer.style.paddingTop = '24px';
        }
    });

    console.log("Hafidlul Website System Ready.");



// ... kode JS kamu yang lain ...

    // --- LOGIKA BACK TO TOP ---
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Jika scroll lebih dari 300px, munculkan tombol
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Fungsi Klik untuk Scroll ke Atas (Smooth)
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

/* --- MOBILE MENU TOGGLE --- */
const menuBtn = document.querySelector('.mobile-menu-btn');
const navPills = document.querySelector('.nav-pills');
const navLinks = document.querySelectorAll('.nav-link');

// 1. Toggle Menu saat tombol hamburger diklik
menuBtn.addEventListener('click', () => {
    navPills.classList.toggle('active');
});

// 2. Tutup Menu otomatis saat salah satu link diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navPills.classList.remove('active');
    });
});

// 3. Tutup Menu jika klik di luar area menu
document.addEventListener('click', (e) => {
    if (!navPills.contains(e.target) && !menuBtn.contains(e.target)) {
        navPills.classList.remove('active');
    }
});

});