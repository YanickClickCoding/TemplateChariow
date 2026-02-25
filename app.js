// Mettre en surbrillance le menu actif
document.addEventListener('DOMContentLoaded', function() {
    highlightActiveMenu();
    initializeMenus();
    initializeAnimations();
});

function highlightActiveMenu() {
    // Obtenir le nom de la page actuelle
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Sélectionner tous les liens du menu
    const menuLinks = document.querySelectorAll('.navbar .menu a[href]');
    
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Vérifier si le lien correspond à la page actuelle
        if (href === currentPage) {
            link.classList.add('active');
            
            // Si le lien est dans un sous-menu, marquer aussi le parent
            const parentDetails = link.closest('details');
            if (parentDetails) {
                const parentSummary = parentDetails.querySelector('summary');
                if (parentSummary) {
                    parentSummary.classList.add('active');
                }
            }
        }
    });
}

function initializeMenus() {
    // Ouverture automatique des sous-menus au survol (desktop uniquement)
    const menuItems = document.querySelectorAll('.navbar-center .menu-horizontal > li:has(details)');
    
    menuItems.forEach(item => {
        const details = item.querySelector('details');
        
        // Ouvrir au survol
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 1024) { // lg breakpoint
                details.setAttribute('open', '');
            }
        });
        
        // Fermer quand on quitte
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 1024) {
                details.removeAttribute('open');
            }
        });
    });

    // Animation smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Effet de recherche avec feedback visuel
    const searchInput = document.querySelector('input[placeholder="Rechercher..."]');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.05)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    }

    // Animation du logo au scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll vers le bas
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            navbar.style.transform = 'translateY(0)';
        }
        
        navbar.style.transition = 'transform 0.3s ease';
        lastScroll = currentScroll;
    });
}

function initializeAnimations() {
    // Animation des cards produits au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer toutes les cards produits
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Compteur animé pour les badges du panier/favoris
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 20;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 50);
    }

    // Animer les compteurs au chargement
    setTimeout(() => {
        const badges = document.querySelectorAll('.indicator-item.badge');
        badges.forEach(badge => {
            const value = parseInt(badge.textContent);
            if (!isNaN(value)) {
                badge.textContent = '0';
                setTimeout(() => animateCounter(badge, value), 500);
            }
        });
    }, 500);

    // Effet parallax sur le hero
    const hero = document.querySelector('.hero img');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Toast notification pour les actions (ajout au panier, etc.)
    window.showToast = function(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `alert alert-${type} fixed bottom-4 right-4 w-auto max-w-sm z-50 shadow-lg`;
        toast.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transition = 'opacity 0.5s ease';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    // Ajouter l'événement aux boutons "Ajouter au panier"
    setTimeout(() => {
        document.querySelectorAll('.btn-primary').forEach(btn => {
            if (btn.textContent.includes('Ajouter au panier')) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productName = this.closest('.card-body').querySelector('.card-title').textContent;
                    showToast(`${productName} ajouté au panier !`, 'success');
                    
                    // Animer le badge du panier
                    const cartBadge = document.querySelector('a[href="panier.html"] .badge');
                    if (cartBadge) {
                        const currentValue = parseInt(cartBadge.textContent) || 0;
                        cartBadge.textContent = currentValue + 1;
                        cartBadge.style.transform = 'scale(1.5)';
                        setTimeout(() => {
                            cartBadge.style.transition = 'transform 0.3s ease';
                            cartBadge.style.transform = 'scale(1)';
                        }, 100);
                    }
                });
            }
        });
    }, 1000);
}
