document.addEventListener('DOMContentLoaded', () => {
    /* --- 3D CAROUSEL LOGIC (SNAP & MORPH) --- */
    const header = document.getElementById('carousel-header');
    const cards = Array.from(document.querySelectorAll('.carousel-card'));
    
    // Define Project Gradients (Light vs Dark)
    const brandGradients = [
        ['#42D596', '#059669'], // Spico
        ['#3b82f6', '#2563eb'], // LuFin
        ['#B97E65', '#78350f'], // DocshunD
        ['#ee7f6bff', '#c2410c'], // EveryMatch
        ['#0f172a', '#312e81']  // 42Seoul
    ];

    const darkGradients = [
        ['#020617', '#064e3b'], // Spico
        ['#020617', '#1e3a8a'], // LuFin
        ['#020617', '#451a03'], // DocshunD
        ['#020617', '#7c2d12'], // EveryMatch
        ['#020617', '#1e1b4b']  // 42Seoul
    ];

    function getGradients() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') return darkGradients;
        if (theme === 'light') return brandGradients;
        // Fallback to system
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? darkGradients : brandGradients;
    }

    // Define Project Logos
    const projectLogos = [
        './assets/spico/logo.png',
        './assets/LuFin/logo.png',
        './assets/docshund/logo.png',
        './assets/everymatch/logo.png',
        './assets/42seoul/logo.png'
    ];

    const bottomLogo = document.querySelector('.carousel-bottom-logo');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    let autoPlayTimer;
    let isAnimating = false;

    function updateCarousel() {
        const gradients = getGradients();
        if (!header || !bottomLogo) return;

        // Debounce: Lock interaction
        isAnimating = true;
        setTimeout(() => { isAnimating = false; }, 600); // Match CSS transition 0.6s

        const [c1, c2] = gradients[currentIndex];
        header.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
        
        // Update Bottom Logo with subtle fade
        bottomLogo.style.opacity = '0';
        setTimeout(() => {
            bottomLogo.src = projectLogos[currentIndex];
            
            // Special sizing for DocshunD
            if (currentIndex === 2) {
                bottomLogo.style.height = '120px'; // Bigger for DocshunD
            } else {
                bottomLogo.style.height = '70px'; // Default
            }
            
            bottomLogo.style.opacity = '1';
        }, 200);

        cards.forEach((card, index) => {
            // Reset classes
            card.className = 'carousel-card';

            let diff = index - currentIndex;
            const n = cards.length;
            if (diff > n / 2) diff -= n;
            if (diff < -n / 2) diff += n;

            if (diff === 0) {
                card.classList.add('active');
            } else if (diff === -1 || (diff === n-1)) {
                card.classList.add('prev');
            } else if (diff === 1 || (diff === -(n-1))) {
                card.classList.add('next');
            } else if (diff < 0) {
                card.classList.add('far-prev');
            } else {
                card.classList.add('far-next');
            }
            
            // Allow clicking prev/next to navigate
            card.onclick = () => {
                if (isAnimating) return; // Prevent click while animating
                
                if (index !== currentIndex) {
                    currentIndex = index;
                    updateCarousel();
                    resetAutoPlay();
                } else {
                    // If active, navigate to link
                    const links = [
                        './projects/spico.html',
                        './projects/lufin.html',
                        './projects/docshund.html',
                        './projects/everymatch.html',
                        './projects/42seoul.html'
                    ];
                    window.location.href = links[index];
                }
            };
        });
    }

    function nextSlide() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to start
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1; // Loop to end
        }
        updateCarousel();
    }
    
    // Button Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (isAnimating) return;
            nextSlide();
            resetAutoPlay();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (isAnimating) return;
            prevSlide();
            resetAutoPlay();
        });
    }

    // Auto Play Logic
    function startAutoPlay() {
        autoPlayTimer = setInterval(() => {
            nextSlide();
        }, 5000); // 5 Seconds
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }
    
    // Init if we have cards
    if (cards.length > 0) {
        updateCarousel();
        startAutoPlay();
    }

    // Listen for theme changes from main.js (Immediate Update)
    window.addEventListener('themeChanged', () => {
        updateCarousel();
    });
});
