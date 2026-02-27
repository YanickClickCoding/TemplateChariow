// Vérifier l'authentification
checkAuth();

// Charger les produits au chargement de la page
loadProducts();

// Gestion de l'aperçu de l'image
document.getElementById('productImage').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const preview = document.getElementById('imagePreview');
            const previewImg = document.getElementById('previewImg');
            previewImg.src = event.target.result;
            preview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});

// Gestion de la recherche
document.getElementById('searchProducts').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const products = StorageManager.load(StorageManager.KEYS.PRODUCTS) || [];
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
});

// Charger et afficher les produits
function loadProducts() {
    const products = StorageManager.load(StorageManager.KEYS.PRODUCTS) || [];
    displayProducts(products);
}

function displayProducts(products) {
    const tbody = document.getElementById('productsTable');
    
    if (products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-gray-500">Aucun produit</td></tr>';
        return;
    }

    tbody.innerHTML = products.map(product => `
        <tr>
            <td>
                <div class="avatar">
                    <div class="w-16 h-16 rounded">
                        <img src="${product.image}" alt="${product.name}" />
                    </div>
                </div>
            </td>
            <td>${product.name}</td>
            <td>${formatPrice(product.price)}</td>
            <td>
                <span class="badge ${product.stock > 10 ? 'badge-success' : product.stock > 0 ? 'badge-warning' : 'badge-error'}">
                    ${product.stock}
                </span>
            </td>
            <td><span class="badge badge-outline">${product.category}</span></td>
            <td>
                <div class="flex gap-2 flex-nowrap">
                    <button class="btn btn-sm btn-primary whitespace-nowrap" onclick="editProduct(${product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        Modifier
                    </button>
                    <button class="btn btn-sm btn-error whitespace-nowrap" onclick="deleteProduct(${product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        Supprimer
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Ouvrir le modal d'ajout
function openAddProductModal() {
    document.getElementById('modalTitle').textContent = 'Ajouter un produit';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('imagePreview').classList.add('hidden');
    document.getElementById('productModal').showModal();
}

// Fermer le modal
function closeProductModal() {
    document.getElementById('productModal').close();
}

// Modifier un produit
function editProduct(id) {
    const products = StorageManager.load(StorageManager.KEYS.PRODUCTS) || [];
    const product = products.find(p => p.id === id);
    
    if (!product) return;

    document.getElementById('modalTitle').textContent = 'Modifier le produit';
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock;
    document.getElementById('productCategory').value = product.category;
    
    // Afficher l'aperçu de l'image existante
    if (product.image) {
        const preview = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');
        previewImg.src = product.image;
        preview.classList.remove('hidden');
    }
    
    document.getElementById('productModal').showModal();
}

// Supprimer un produit
function deleteProduct(id) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) return;

    const products = StorageManager.load(StorageManager.KEYS.PRODUCTS) || [];
    const filtered = products.filter(p => p.id !== id);
    
    StorageManager.save(StorageManager.KEYS.PRODUCTS, filtered);
    loadProducts();
    showToast('Produit supprimé avec succès', 'success');
}

// Soumettre le formulaire
document.getElementById('productForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const products = StorageManager.load(StorageManager.KEYS.PRODUCTS) || [];
    const id = document.getElementById('productId').value;
    const imageFile = document.getElementById('productImage').files[0];
    
    // Récupérer l'image existante si on modifie et qu'aucun nouveau fichier n'est sélectionné
    let imageData = id ? products.find(p => p.id === parseInt(id))?.image : null;
    
    // Si un nouveau fichier est sélectionné, le convertir en Base64
    if (imageFile) {
        imageData = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(imageFile);
        });
    }
    
    // Vérifier qu'on a bien une image
    if (!imageData) {
        showToast('Veuillez sélectionner une image', 'error');
        return;
    }
    
    const productData = {
        id: id ? parseInt(id) : Date.now(),
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        price: parseFloat(document.getElementById('productPrice').value),
        stock: parseInt(document.getElementById('productStock').value),
        category: document.getElementById('productCategory').value,
        image: imageData,
        rating: 0,
        reviews: 0,
        createdAt: id ? products.find(p => p.id === parseInt(id))?.createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (id) {
        // Mise à jour
        const index = products.findIndex(p => p.id === parseInt(id));
        products[index] = productData;
        showToast('Produit modifié avec succès', 'success');
    } else {
        // Ajout
        products.push(productData);
        showToast('Produit ajouté avec succès', 'success');
    }

    StorageManager.save(StorageManager.KEYS.PRODUCTS, products);
    loadProducts();
    closeProductModal();
});
