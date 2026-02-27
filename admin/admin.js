// ===================================
// ADMIN.JS - Logique JavaScript pour le dashboard admin
// ===================================

// Vérifier l'authentification
function checkAuth() {
    const session = localStorage.getItem('adminSession');
    
    // Si pas de session et pas sur la page de login, rediriger
    if (!session && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
        return false;
    }
    
    // Si session existe et sur la page de login, rediriger vers dashboard
    if (session && window.location.pathname.includes('login.html')) {
        window.location.href = 'index.html';
        return true;
    }
    
    return !!session;
}

// Déconnexion
function logout() {
    localStorage.removeItem('adminSession');
    window.location.href = 'login.html';
}

// ===================================
// STORAGE MANAGER
// ===================================

class StorageManager {
    static KEYS = {
        PRODUCTS: 'shopstyle_products',
        ORDERS: 'shopstyle_orders',
        CUSTOMERS: 'shopstyle_customers',
        ADMIN_SESSION: 'adminSession'
    };

    static save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Erreur de sauvegarde:', error);
            return false;
        }
    }

    static load(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Erreur de chargement:', error);
            return null;
        }
    }

    static remove(key) {
        localStorage.removeItem(key);
    }

    static clear() {
        Object.values(this.KEYS).forEach(key => this.remove(key));
    }
}

// ===================================
// INITIALISATION DES DONNÉES DE DEMO
// ===================================

function initDemoData() {
    // Vérifier si les données existent déjà
    const products = StorageManager.load(StorageManager.KEYS.PRODUCTS);
    
    if (!products || products.length === 0) {
        // Créer des produits de démonstration
        const demoProducts = [
            {
                id: 1,
                name: "Robe d'été élégante",
                description: "Robe légère et confortable pour l'été",
                price: 63.99,
                oldPrice: 79.99,
                stock: 15,
                category: "femme",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
                rating: 5,
                reviews: 45,
                badge: "sale",
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: "Chemise casual homme",
                description: "Chemise confortable pour tous les jours",
                price: 49.99,
                stock: 20,
                category: "homme",
                image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
                rating: 4,
                reviews: 32,
                badge: "new",
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                name: "Sneakers confort",
                description: "Baskets confortables pour la marche",
                price: 89.99,
                stock: 10,
                category: "accessoires",
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
                rating: 5,
                reviews: 89,
                createdAt: new Date().toISOString()
            },
            {
                id: 4,
                name: "T-shirt coloré enfant",
                description: "T-shirt amusant pour enfants",
                price: 19.99,
                stock: 30,
                category: "enfants",
                image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=300&fit=crop",
                rating: 5,
                reviews: 42,
                badge: "new",
                createdAt: new Date().toISOString()
            }
        ];
        
        StorageManager.save(StorageManager.KEYS.PRODUCTS, demoProducts);
    }

    // Créer des commandes de démonstration
    const orders = StorageManager.load(StorageManager.KEYS.ORDERS);
    
    if (!orders || orders.length === 0) {
        const demoOrders = [
            {
                id: 1001,
                customerId: 1,
                customerName: "Marie Dupont",
                customerEmail: "marie.dupont@email.com",
                items: [
                    { productId: 1, name: "Robe d'été élégante", price: 63.99, quantity: 1 }
                ],
                subtotal: 63.99,
                shipping: 5.00,
                tax: 13.80,
                total: 82.79,
                status: "delivered",
                date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 1002,
                customerId: 2,
                customerName: "Jean Martin",
                customerEmail: "jean.martin@email.com",
                items: [
                    { productId: 2, name: "Chemise casual homme", price: 49.99, quantity: 2 }
                ],
                subtotal: 99.98,
                shipping: 5.00,
                tax: 21.00,
                total: 125.98,
                status: "shipped",
                date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 1003,
                customerId: 3,
                customerName: "Sophie Bernard",
                customerEmail: "sophie.bernard@email.com",
                items: [
                    { productId: 3, name: "Sneakers confort", price: 89.99, quantity: 1 }
                ],
                subtotal: 89.99,
                shipping: 5.00,
                tax: 19.00,
                total: 113.99,
                status: "processing",
                date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
            }
        ];
        
        StorageManager.save(StorageManager.KEYS.ORDERS, demoOrders);
    }

    // Créer des clients de démonstration
    const customers = StorageManager.load(StorageManager.KEYS.CUSTOMERS);
    
    if (!customers || customers.length === 0) {
        const demoCustomers = [
            {
                id: 1,
                firstName: "Marie",
                lastName: "Dupont",
                email: "marie.dupont@email.com",
                phone: "06 12 34 56 78",
                orders: [1001],
                totalSpent: 82.79,
                createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
                lastOrderDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 2,
                firstName: "Jean",
                lastName: "Martin",
                email: "jean.martin@email.com",
                phone: "06 98 76 54 32",
                orders: [1002],
                totalSpent: 125.98,
                createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
                lastOrderDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 3,
                firstName: "Sophie",
                lastName: "Bernard",
                email: "sophie.bernard@email.com",
                phone: "06 11 22 33 44",
                orders: [1003],
                totalSpent: 113.99,
                createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
                lastOrderDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
            }
        ];
        
        StorageManager.save(StorageManager.KEYS.CUSTOMERS, demoCustomers);
    }
}

// Initialiser les données de démo au chargement
if (typeof window !== 'undefined') {
    initDemoData();
}

// ===================================
// UTILITAIRES
// ===================================

function showToast(message, type = 'success') {
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
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatPrice(price) {
    return price.toFixed(2) + '€';
}
