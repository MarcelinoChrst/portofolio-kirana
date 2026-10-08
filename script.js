document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Toggle Navigasi Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Ubah ikon tombol hamburger / close
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Tutup menu mobile ketika salah satu tautan navigasi diklik
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Interaksi Ganti Tema Langit (Siang/Malam)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (bodyElement.classList.contains('day-theme')) {
                bodyElement.classList.remove('day-theme');
                bodyElement.classList.add('night-theme');
                themeToggleBtn.innerHTML = '** Mode Siang';
            } else {
                bodyElement.classList.remove('night-theme');
                bodyElement.classList.add('day-theme');
                themeToggleBtn.innerHTML = '** Mode Malam';
            }
        });
    }

    // 3. Tombol Scroll To Top
    const scrollTopBtn = document.getElementById('scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});