document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENU MOBILE ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }

    // --- ANIMAÇÃO DE ELEMENTOS AO ROLAR ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => observer.observe(el));
});
