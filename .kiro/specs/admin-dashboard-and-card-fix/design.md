# Design Document

## Overview

Ce document décrit la conception technique pour deux améliorations du site e-commerce ShopStyle :

1. **Correction des cartes de produits** : Résoudre les problèmes de débordement et assurer un affichage uniforme et professionnel des cartes de produits sur toutes les pages.

2. **Tableau de bord administrateur** : Créer une interface d'administration complète permettant de gérer les produits, commandes, et clients avec des statistiques en temps réel.

La solution utilisera les technologies existantes du projet (HTML, CSS avec DaisyUI/Tailwind, JavaScript) pour maintenir la cohérence du code.

## Architecture

### Structure des fichiers

```
/
├── admin/
│   ├── index.html          # Page principale du dashboard
│   ├── login.html          # Page de connexion admin
│   ├── products.html       # Gestion des produits
│   ├── orders.html         # Gestion des commandes
│   ├── customers.html      # Gestion des clients
│   └── admin.js            # Logique JavaScript du dashboard
├── styles.css              # Styles existants (à modifier)
├── app.js                  # Scripts existants (à modifier)
└── [autres fichiers existants]
```

### Architecture technique

Le système suivra une architecture client-side avec :
- **Frontend** : HTML5, CSS3 (DaisyUI + Tailwind), JavaScript vanilla
- **Stockage** : LocalStorage pour la persistance des données (simulation backend)
- **Authentification** : Session-based avec LocalStorage
- **Responsive Design** : Mobile-first avec breakpoints Tailwind

## Components and Interfaces

### 1. Correction des cartes de produits

#### Composant ProductCard (Amélioré)

Les cartes de produits existantes seront corrigées avec les classes CSS suivantes :

```css
.product-card-fixed {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.product-card-image {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
}

.product-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
}

.product-card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 3rem;
}

.product-card-actions {
  margin-top: auto;
}
```

#### Modifications HTML

Les cartes existantes seront mises à jour pour utiliser une structure cohérente :

```html
<div class="card bg-base-100 shadow-xl product-card-fixed">
    <figure class="relative">
        <img src="..." alt="..." class="product-card-image" />
        <div class="badge badge-error absolute top-4 right-4">-20%</div>
    </figure>
    <div class="card-body product-card-body">
        <h2 class="card-title product-card-title">Nom du produit</h2>
        <div class="rating rating-sm">...</div>
        <p class="text-sm text-gray-500">(45 avis)</p>
        <div class="flex items-center gap-2">
            <span class="text-2xl font-bold text-primary">63,99€</span>
        </div>
        <div class="card-actions product-card-actions">
            <button class="btn btn-primary btn-block">Ajouter au panier</button>
        </div>
    </div>
</div>
```

### 2. Tableau de bord administrateur

#### Composant AdminLayout

Structure de base du dashboard :

```html
<div class="admin-layout">
    <aside class="admin-sidebar">
        <!-- Navigation -->
    </aside>
    <main class="admin-content">
        <header class="admin-header">
            <!-- Barre supérieure -->
        </header>
        <div class="admin-main">
            <!-- Contenu principal -->
        </div>
    </main>
</div>
```

#### Composant AdminSidebar

Menu de navigation latéral :

```javascript
const AdminSidebar = {
  items: [
    { id: 'dashboard', label: 'Tableau de bord', icon: '📊', url: 'index.html' },
    { id: 'products', label: 'Produits', icon: '📦', url: 'products.html' },
    { id: 'orders', label: 'Commandes', icon: '🛒', url: 'orders.html' },
    { id: 'customers', label: 'Clients', icon: '👥', url: 'customers.html' },
    { id: 'logout', label: 'Déconnexion', icon: '🚪', action: 'logout' }
  ]
};
```

#### Composant StatsCard

Carte de statistiques pour le dashboard :

```javascript
class StatsCard {
  constructor(title, value, icon, trend) {
    this.title = title;
    this.value = value;
    this.icon = icon;
    this.trend = trend; // { value: '+12%', positive: true }
  }
  
  render() {
    return `
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-figure text-primary">
            <span class="text-4xl">${this.icon}</span>
          </div>
          <div class="stat-title">${this.title}</div>
          <div class="stat-value">${this.value}</div>
          <div class="stat-desc ${this.trend.positive ? 'text-success' : 'text-error'}">
            ${this.trend.value}
          </div>
        </div>
      </div>
    `;
  }
}
```

#### Composant ProductTable

Table de gestion des produits :

```javascript
class ProductTable {
  constructor(products) {
    this.products = products;
  }
  
  render() {
    return `
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th>Image</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Stock</th>
              <th>Catégorie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${this.products.map(p => this.renderRow(p)).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  renderRow(product) {
    return `
      <tr>
        <td><img src="${product.image}" class="w-16 h-16 object-cover rounded" /></td>
        <td>${product.name}</td>
        <td>${product.price}€</td>
        <td>${product.stock}</td>
        <td>${product.category}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="editProduct(${product.id})">Modifier</button>
          <button class="btn btn-sm btn-error" onclick="deleteProduct(${product.id})">Supprimer</button>
        </td>
      </tr>
    `;
  }
}
```

#### Composant ProductForm

Formulaire d'ajout/modification de produit :

```javascript
class ProductForm {
  constructor(product = null) {
    this.product = product;
    this.isEdit = product !== null;
  }
  
  render() {
    return `
      <form id="productForm" class="space-y-4">
        <div class="form-control">
          <label class="label"><span class="label-text">Nom du produit</span></label>
          <input type="text" name="name" value="${this.product?.name || ''}" 
                 class="input input-bordered" required />
        </div>
        
        <div class="form-control">
          <label class="label"><span class="label-text">Description</span></label>
          <textarea name="description" class="textarea textarea-bordered" required>
            ${this.product?.description || ''}
          </textarea>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label"><span class="label-text">Prix (€)</span></label>
            <input type="number" name="price" value="${this.product?.price || ''}" 
                   class="input input-bordered" step="0.01" required />
          </div>
          
          <div class="form-control">
            <label class="label"><span class="label-text">Stock</span></label>
            <input type="number" name="stock" value="${this.product?.stock || ''}" 
                   class="input input-bordered" required />
          </div>
        </div>
        
        <div class="form-control">
          <label class="label"><span class="label-text">Catégorie</span></label>
          <select name="category" class="select select-bordered" required>
            <option value="">Sélectionner...</option>
            <option value="femme">Femme</option>
            <option value="homme">Homme</option>
            <option value="enfants">Enfants</option>
            <option value="accessoires">Accessoires</option>
          </select>
        </div>
        
        <div class="form-control">
          <label class="label"><span class="label-text">URL de l'image</span></label>
          <input type="url" name="image" value="${this.product?.image || ''}" 
                 class="input input-bordered" required />
        </div>
        
        <div class="flex gap-2">
          <button type="submit" class="btn btn-primary flex-1">
            ${this.isEdit ? 'Mettre à jour' : 'Créer'}
          </button>
          <button type="button" class="btn btn-ghost" onclick="closeModal()">
            Annuler
          </button>
        </div>
      </form>
    `;
  }
}
```

#### Composant OrderTable

Table de gestion des commandes :

```javascript
class OrderTable {
  constructor(orders) {
    this.orders = orders;
  }
  
  getStatusBadge(status) {
    const badges = {
      'pending': 'badge-warning',
      'processing': 'badge-info',
      'shipped': 'badge-primary',
      'delivered': 'badge-success',
      'cancelled': 'badge-error'
    };
    return badges[status] || 'badge-ghost';
  }
  
  render() {
    return `
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th>N° Commande</th>
              <th>Client</th>
              <th>Date</th>
              <th>Total</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${this.orders.map(o => this.renderRow(o)).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  renderRow(order) {
    return `
      <tr>
        <td>#${order.id}</td>
        <td>${order.customerName}</td>
        <td>${new Date(order.date).toLocaleDateString('fr-FR')}</td>
        <td>${order.total}€</td>
        <td><span class="badge ${this.getStatusBadge(order.status)}">${order.status}</span></td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="viewOrder(${order.id})">Voir</button>
          <select class="select select-sm select-bordered" onchange="updateOrderStatus(${order.id}, this.value)">
            <option value="">Changer statut</option>
            <option value="pending">En attente</option>
            <option value="processing">En traitement</option>
            <option value="shipped">Expédiée</option>
            <option value="delivered">Livrée</option>
            <option value="cancelled">Annulée</option>
          </select>
        </td>
      </tr>
    `;
  }
}
```

## Data Models

### Product

```javascript
class Product {
  constructor(data) {
    this.id = data.id || Date.now();
    this.name = data.name;
    this.description = data.description;
    this.price = parseFloat(data.price);
    this.oldPrice = data.oldPrice ? parseFloat(data.oldPrice) : null;
    this.stock = parseInt(data.stock);
    this.category = data.category;
    this.image = data.image;
    this.rating = data.rating || 0;
    this.reviews = data.reviews || 0;
    this.badge = data.badge || null; // 'new', 'sale', etc.
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
  
  validate() {
    if (!this.name || this.name.trim().length === 0) {
      throw new Error('Le nom du produit est requis');
    }
    if (this.price <= 0) {
      throw new Error('Le prix doit être supérieur à 0');
    }
    if (this.stock < 0) {
      throw new Error('Le stock ne peut pas être négatif');
    }
    if (!['femme', 'homme', 'enfants', 'accessoires'].includes(this.category)) {
      throw new Error('Catégorie invalide');
    }
    return true;
  }
  
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      oldPrice: this.oldPrice,
      stock: this.stock,
      category: this.category,
      image: this.image,
      rating: this.rating,
      reviews: this.reviews,
      badge: this.badge,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
```

### Order

```javascript
class Order {
  constructor(data) {
    this.id = data.id || Date.now();
    this.customerId = data.customerId;
    this.customerName = data.customerName;
    this.customerEmail = data.customerEmail;
    this.items = data.items || []; // Array of { productId, name, price, quantity }
    this.subtotal = data.subtotal || 0;
    this.shipping = data.shipping || 0;
    this.tax = data.tax || 0;
    this.total = data.total || 0;
    this.status = data.status || 'pending'; // pending, processing, shipped, delivered, cancelled
    this.shippingAddress = data.shippingAddress || {};
    this.paymentMethod = data.paymentMethod || '';
    this.date = data.date || new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
  
  calculateTotal() {
    this.subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.tax = this.subtotal * 0.20; // TVA 20%
    this.total = this.subtotal + this.shipping + this.tax;
    return this.total;
  }
  
  updateStatus(newStatus) {
    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(newStatus)) {
      throw new Error('Statut invalide');
    }
    this.status = newStatus;
    this.updatedAt = new Date().toISOString();
  }
  
  toJSON() {
    return {
      id: this.id,
      customerId: this.customerId,
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      items: this.items,
      subtotal: this.subtotal,
      shipping: this.shipping,
      tax: this.tax,
      total: this.total,
      status: this.status,
      shippingAddress: this.shippingAddress,
      paymentMethod: this.paymentMethod,
      date: this.date,
      updatedAt: this.updatedAt
    };
  }
}
```

### Customer

```javascript
class Customer {
  constructor(data) {
    this.id = data.id || Date.now();
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.phone = data.phone || '';
    this.address = data.address || {};
    this.orders = data.orders || []; // Array of order IDs
    this.totalSpent = data.totalSpent || 0;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.lastOrderDate = data.lastOrderDate || null;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  addOrder(orderId, orderTotal) {
    this.orders.push(orderId);
    this.totalSpent += orderTotal;
    this.lastOrderDate = new Date().toISOString();
  }
  
  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      orders: this.orders,
      totalSpent: this.totalSpent,
      createdAt: this.createdAt,
      lastOrderDate: this.lastOrderDate
    };
  }
}
```

### AdminUser

```javascript
class AdminUser {
  constructor(data) {
    this.id = data.id || Date.now();
    this.username = data.username;
    this.passwordHash = data.passwordHash; // En production, utiliser un vrai hash
    this.email = data.email;
    this.role = data.role || 'admin';
    this.lastLogin = data.lastLogin || null;
  }
  
  authenticate(password) {
    // Simulation simple - en production, utiliser bcrypt ou similaire
    return this.passwordHash === password;
  }
  
  updateLastLogin() {
    this.lastLogin = new Date().toISOString();
  }
}
```

### StorageManager

Gestionnaire de persistance avec LocalStorage :

```javascript
class StorageManager {
  static KEYS = {
    PRODUCTS: 'shopstyle_products',
    ORDERS: 'shopstyle_orders',
    CUSTOMERS: 'shopstyle_customers',
    ADMIN_SESSION: 'shopstyle_admin_session',
    ADMIN_USERS: 'shopstyle_admin_users'
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
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

Après analyse des critères d'acceptation, plusieurs propriétés peuvent être consolidées :

- Les propriétés 3.1-3.5 (affichage des statistiques) peuvent être regroupées en une seule propriété vérifiant que tous les éléments statistiques requis sont présents
- Les propriétés 7.1-7.3 (responsive à différents breakpoints) sont des cas spécifiques de la propriété 7.4 (adaptation responsive générale)
- Les propriétés de recherche (5.5 et 6.3) partagent la même logique et peuvent être testées avec une propriété générique de recherche

Les propriétés suivantes seront implémentées :

### Product Card Properties

Property 1: Card content containment
*For any* product card, all content elements (image, title, price, buttons) should be contained within the card boundaries without overflow

**Validates: Requirements 1.1**

Property 2: Title truncation with ellipsis
*For any* product title exceeding two lines, the text should be truncated with an ellipsis indicator

**Validates: Requirements 1.2**

Property 3: Consistent image aspect ratio
*For all* product card images in a grid, the aspect ratio should be 4:3

**Validates: Requirements 1.3**

Property 4: Uniform card heights in grid rows
*For any* row of product cards in a grid layout, all cards should have equal height

**Validates: Requirements 1.4**

Property 5: Responsive layout without overflow
*For any* viewport size (mobile, tablet, desktop), product cards should maintain proper layout without content overflow

**Validates: Requirements 1.5**

### Authentication Properties

Property 6: Valid credentials grant access
*For any* valid administrator credentials, authentication should grant access to the admin dashboard

**Validates: Requirements 2.2**

Property 7: Invalid credentials deny access
*For any* invalid credentials (wrong username or password), authentication should deny access and display an error message

**Validates: Requirements 2.3**

Property 8: Session persistence until logout
*For any* authenticated admin session, the session should remain active across page navigations until explicit logout

**Validates: Requirements 2.4**

### Product Management Properties

Property 9: All products displayed in list
*For any* set of products in storage, the products section should display all products with their complete details

**Validates: Requirements 4.1**

Property 10: Product creation persistence
*For any* valid product data submitted through the form, a new product should be created, persisted to storage, and appear in the product list

**Validates: Requirements 4.3**

Property 11: Product edit form population
*For any* product selected for editing, the edit form should be populated with the current product data

**Validates: Requirements 4.4**

Property 12: Product update persistence
*For any* product update submitted through the form, the changes should be persisted to storage and reflected in the product list

**Validates: Requirements 4.5**

Property 13: Product deletion removes from catalog
*For any* product confirmed for deletion, the product should be removed from storage and no longer appear in the product list

**Validates: Requirements 4.7**

### Order Management Properties

Property 14: All orders displayed with status
*For any* set of orders in storage, the orders section should display all orders with their current status

**Validates: Requirements 5.1**

Property 15: Order details display
*For any* order selected for viewing, the system should display complete order information including items, customer, and totals

**Validates: Requirements 5.2**

Property 16: Order status update persistence
*For any* order status update, the new status should be persisted to storage and reflected in the order list

**Validates: Requirements 5.3**

Property 17: Order filtering by status
*For any* status filter applied, only orders matching that status should be displayed in the list

**Validates: Requirements 5.4**

Property 18: Order search functionality
*For any* search query, only orders matching the search criteria (order number, customer name, or email) should be displayed

**Validates: Requirements 5.5**

### Customer Management Properties

Property 19: All customers displayed in list
*For any* set of customers in storage, the customers section should display all customers with their basic information

**Validates: Requirements 6.1**

Property 20: Customer details display with order history
*For any* customer selected for viewing, the system should display complete customer information including their order history

**Validates: Requirements 6.2, 6.4**

Property 21: Customer search functionality
*For any* search query, only customers matching the search criteria (name or email) should be displayed

**Validates: Requirements 6.3**

### Navigation Properties

Property 22: Menu navigation functionality
*For any* menu item clicked, the system should navigate to the corresponding section or page

**Validates: Requirements 8.2**

Property 23: Active menu item highlighting
*For any* active section or page, the corresponding menu item should be visually highlighted

**Validates: Requirements 8.3**

Property 24: Responsive layout adaptation
*For any* viewport size change, the admin dashboard should adapt its layout while maintaining all functionality

**Validates: Requirements 7.4**

## Error Handling

### Product Card Errors

1. **Missing Image**: Si l'URL de l'image est invalide ou l'image ne charge pas, afficher une image placeholder
2. **Missing Data**: Si des données de produit sont manquantes, afficher des valeurs par défaut appropriées
3. **Overflow Detection**: Détecter et logger les cas où le contenu déborde malgré les styles

### Authentication Errors

1. **Invalid Credentials**: Afficher un message d'erreur clair sans révéler si c'est le nom d'utilisateur ou le mot de passe qui est incorrect
2. **Session Expiration**: Rediriger vers la page de connexion si la session expire
3. **Network Errors**: Gérer les erreurs de connexion avec des messages appropriés

### Data Management Errors

1. **Validation Errors**: Afficher des messages d'erreur spécifiques pour chaque champ invalide dans les formulaires
2. **Storage Errors**: Gérer les erreurs de LocalStorage (quota dépassé, accès refusé)
3. **Data Corruption**: Détecter et gérer les données corrompues dans LocalStorage
4. **Concurrent Modifications**: Gérer les conflits potentiels lors de modifications simultanées

### UI Errors

1. **Responsive Breakpoints**: Assurer que l'interface reste utilisable même si certains breakpoints ne fonctionnent pas parfaitement
2. **Missing Elements**: Gérer gracieusement les éléments DOM manquants
3. **Event Handler Errors**: Capturer et logger les erreurs dans les gestionnaires d'événements

## Testing Strategy

### Dual Testing Approach

Ce projet utilisera à la fois des tests unitaires et des tests basés sur les propriétés pour assurer une couverture complète :

- **Tests unitaires** : Vérifier des exemples spécifiques, cas limites et conditions d'erreur
- **Tests basés sur les propriétés** : Vérifier les propriétés universelles sur de nombreuses entrées générées

### Property-Based Testing Configuration

- **Framework** : fast-check (JavaScript property-based testing library)
- **Iterations** : Minimum 100 itérations par test de propriété
- **Tag Format** : Chaque test doit référencer sa propriété avec le format :
  ```javascript
  // Feature: admin-dashboard-and-card-fix, Property 1: Card content containment
  ```

### Unit Testing Focus

Les tests unitaires se concentreront sur :

1. **Exemples spécifiques** :
   - Affichage de la page de connexion admin (Req 2.1)
   - Affichage du formulaire d'ajout de produit (Req 4.2)
   - Affichage de la confirmation de suppression (Req 4.6)
   - Affichage des statistiques du dashboard (Req 3.1-3.5)
   - Affichage du menu sidebar (Req 8.1)
   - Layouts responsive à des breakpoints spécifiques (Req 7.1-7.3)
   - Menu collapsible sur mobile (Req 8.4)

2. **Cas limites** :
   - Titres de produits très longs
   - Produits sans image
   - Commandes avec de nombreux articles
   - Clients sans historique de commandes
   - Recherches sans résultats

3. **Conditions d'erreur** :
   - Soumission de formulaires avec données invalides
   - Tentatives de suppression de produits inexistants
   - Mise à jour de commandes avec statuts invalides
   - Gestion des erreurs de LocalStorage

### Property Testing Focus

Les tests de propriétés se concentreront sur :

1. **Propriétés de layout** :
   - Containment du contenu des cartes (Property 1)
   - Troncature des titres (Property 2)
   - Ratio d'aspect des images (Property 3)
   - Hauteur uniforme des cartes (Property 4)
   - Layout responsive (Property 5, 24)

2. **Propriétés d'authentification** :
   - Accès avec credentials valides (Property 6)
   - Refus avec credentials invalides (Property 7)
   - Persistance de session (Property 8)

3. **Propriétés CRUD** :
   - Affichage complet des listes (Properties 9, 14, 19)
   - Création et persistance (Property 10)
   - Lecture et affichage (Properties 11, 15, 20)
   - Mise à jour et persistance (Properties 12, 16)
   - Suppression (Property 13)

4. **Propriétés de recherche et filtrage** :
   - Filtrage par statut (Property 17)
   - Recherche de commandes (Property 18)
   - Recherche de clients (Property 21)

5. **Propriétés de navigation** :
   - Navigation fonctionnelle (Property 22)
   - Highlighting des items actifs (Property 23)

### Test Data Generation

Pour les tests basés sur les propriétés, nous utiliserons fast-check pour générer :

```javascript
// Générateur de produits aléatoires
const productArbitrary = fc.record({
  name: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 10, maxLength: 500 }),
  price: fc.float({ min: 0.01, max: 9999.99 }),
  stock: fc.integer({ min: 0, max: 1000 }),
  category: fc.constantFrom('femme', 'homme', 'enfants', 'accessoires'),
  image: fc.webUrl()
});

// Générateur de commandes aléatoires
const orderArbitrary = fc.record({
  customerName: fc.fullName(),
  customerEmail: fc.emailAddress(),
  items: fc.array(fc.record({
    productId: fc.integer({ min: 1 }),
    name: fc.string({ minLength: 1 }),
    price: fc.float({ min: 0.01, max: 999.99 }),
    quantity: fc.integer({ min: 1, max: 10 })
  }), { minLength: 1, maxLength: 10 }),
  status: fc.constantFrom('pending', 'processing', 'shipped', 'delivered', 'cancelled')
});

// Générateur de clients aléatoires
const customerArbitrary = fc.record({
  firstName: fc.firstName(),
  lastName: fc.lastName(),
  email: fc.emailAddress(),
  phone: fc.phoneNumber()
});
```

### Testing Workflow

1. **Développement** : Écrire les tests en parallèle avec l'implémentation
2. **Validation** : Exécuter tous les tests avant chaque commit
3. **Régression** : Maintenir une suite de tests de régression pour les bugs corrigés
4. **Performance** : Surveiller le temps d'exécution des tests de propriétés

### Coverage Goals

- **Code Coverage** : Minimum 80% de couverture de code
- **Property Coverage** : Toutes les propriétés définies doivent avoir un test
- **Requirement Coverage** : Tous les critères d'acceptation testables doivent être couverts
