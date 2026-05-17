document.addEventListener('DOMContentLoaded', () => {
    /* ===== SCROLL ANIMATIONS ===== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's the stats section, trigger counter animation
                if (entry.target.classList.contains('stats-container') || entry.target.closest('.stats-bar')) {
                    animateCounters();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    /* ===== STATS COUNTER ANIMATION ===== */
    let countersAnimated = false;
    
    function animateCounters() {
        if (countersAnimated) return;
        
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            const inc = target / speed;

            let current = 0;
            const updateCount = () => {
                current += inc;
                if (current < target) {
                    counter.innerText = Math.ceil(current) + suffix;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target + suffix;
                }
            };

            updateCount();
        });
        
        countersAnimated = true;
    }

    // Force observe the stats container separately just in case
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                statsObserver.disconnect();
            }
        });
        statsObserver.observe(statsContainer);
    }

    /* ===== NAVBAR SCROLL EFFECT ===== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 10px rgba(10, 22, 40, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    /* ===== MOBILE MENU ===== */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* ===== LOGIN MODAL ===== */
    const loginModal = document.getElementById('loginModal');
    const openLoginBtns = [document.getElementById('openLoginModalBtn'), document.getElementById('footerPatientPortalBtn')];
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalForms = document.querySelectorAll('.modal-form');

    // Open Modal
    openLoginBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                loginModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });

    // Close Modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on overlay click
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Tab Switching
    modalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            modalTabs.forEach(t => t.classList.remove('active'));
            modalForms.forEach(f => f.classList.remove('active'));
            
            // Add active to clicked
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    /* ===== DASHBOARD MODAL ===== */
    const dashboardModal = document.getElementById('dashboardModal');
    const myAppointmentsBtn = document.getElementById('myAppointmentsBtn');
    const closeDashboardBtn = document.getElementById('closeDashboardBtn');

    if (myAppointmentsBtn) {
        myAppointmentsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            dashboardModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeDashboardBtn) {
        closeDashboardBtn.addEventListener('click', () => {
            dashboardModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (dashboardModal) {
        dashboardModal.addEventListener('click', (e) => {
            if (e.target === dashboardModal) {
                dashboardModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /* ===== FILTER TABS (Research & Media) ===== */
    const filterTabGroups = document.querySelectorAll('.filter-tabs');
    
    filterTabGroups.forEach(group => {
        const btns = group.querySelectorAll('.filter-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Normally we'd filter cards here, but for visuals we just toggle the active state
            });
        });
    });

    /* ===== STAR RATING (Feedback Form) ===== */
    const stars = document.querySelectorAll('.star-selector i');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const val = parseInt(star.getAttribute('data-val'));
            
            stars.forEach(s => {
                s.classList.remove('fa-solid');
                s.classList.add('fa-regular');
                s.classList.remove('active');
            });
            
            for (let i = 0; i < val; i++) {
                stars[i].classList.remove('fa-regular');
                stars[i].classList.add('fa-solid');
                stars[i].classList.add('active');
            }
        });
    });

    /* ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS ===== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

/* ===== LOGIN FUNCTIONALITY ===== */
function handleLogin() {
    // Hide modal
    const loginModal = document.getElementById('loginModal');
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Toggle UI state
    document.getElementById('openLoginModalBtn').style.display = 'none';
    document.getElementById('loggedInState').style.display = 'block';
}

// Add logout listener
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('openLoginModalBtn').style.display = 'block';
    document.getElementById('loggedInState').style.display = 'none';
});
