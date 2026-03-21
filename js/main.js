console.log(`%c
-------------------------------------------------

    ( (      
     ) )        RECRUITING?
  ---------     Let's have a chat!
 |         |]      ↓  ↓  ↓  ↓
  \\       /     [ seohyeon.shkim@gmail.com ]
   \`-----'      

-------------------------------------------------
`, "color: #f7971e; font-weight: bold;");

document.addEventListener('DOMContentLoaded', () => {
    /* --- THEME TOGGLE --- */
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        const defaultTheme = systemDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', defaultTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Dispatch custom event for other scripts (like carousel)
            window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
        });
    }

    /* --- HEADER SCROLL EFFECT --- */
    const headerEl = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (headerEl) {
            if (window.scrollY > 50) {
                headerEl.classList.add('scrolled');
            } else {
                headerEl.classList.remove('scrolled');
            }
        }
    });

    /* --- VIEW MORE REVIEWS --- */
    const viewMoreBtn = document.getElementById('view-more-reviews');
    // Note: .review-hidden elements are dynamic, so we select them inside the click handler or use delegation
    // However, since they are rendered immediately on load, we can query them here if this script runs AFTER render.js
    // render.js runs on DOMContentLoaded. This script also runs on DOMContentLoaded.
    // To ensure safety, we should define this logic to check the DOM at click time.

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            const hiddenReviews = document.querySelectorAll('.review-hidden, .review-card.active.was-hidden'); 
            // We use a marker class or just toggle the .review-hidden class.
            
            // Initial render puts 'review-hidden' class on them.
            // When we click 'show', we remove 'review-hidden' and add 'active'.
            
            const currentlyHidden = document.querySelectorAll('.review-hidden');
            
            if (currentlyHidden.length > 0) {
                // Show items
                currentlyHidden.forEach(review => {
                    review.classList.remove('review-hidden');
                    review.classList.add('active'); // Trigger reveal animation
                    review.classList.add('was-hidden'); // Mark as previously hidden
                });
                viewMoreBtn.innerHTML = '↑';
            } else {
                // Hide items
                const wasHidden = document.querySelectorAll('.was-hidden');
                wasHidden.forEach(review => {
                    review.classList.add('review-hidden');
                    review.classList.remove('active');
                });
                viewMoreBtn.innerHTML = '↓';
            }
        });
    }

    /* --- REVEAL ANIMATION (Global Observer) --- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    // Note: render.js also observes its own elements. 
    // This observer handles static elements like profile, core-values, etc.
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    /* --- MODAL CLOSE LOGIC (Static bindings) --- */
    const modal = document.getElementById('review-modal');
    const closeBtn = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (modal) {
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (backdrop) backdrop.addEventListener('click', closeModal);

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
        });
    }

    /* --- DYNAMIC REVIEW PROJECT COLORS --- */
    // Note: This logic is now in render.js/applyProjectColors() as it depends on rendered content.
    // We can keep it here for any static content if needed, but for reviews it's handled there.
});
