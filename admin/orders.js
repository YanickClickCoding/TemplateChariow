// Vérifier l'authentification
checkAuth();

// Charger les commandes au chargement de la page
loadOrders();

// Gestion du filtrage par statut
document.getElementById('filterStatus').addEventListener('change', function(e) {
    const status = e.target.value;
    const orders = StorageManager.load(StorageManager.KEYS.ORDERS) || [];
    const filtered = status ? orders.filter(o => o.status === status) : orders;
    displayOrders(filtered);
});

// Gestion de la recherche
document.getElementById('searchOrders').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const orders = StorageManager.load(StorageManager.KEYS.ORDERS) || [];
    const filtered = orders.filter(o => 
        o.id.toString().includes(searchTerm) ||
        o.customerName.toLowerCase().includes(searchTerm) ||
        o.customerEmail.toLowerCase().includes(searchTerm)
    );
    displayOrders(filtered);
});

// Charger et afficher les commandes
function loadOrders() {
    const orders = StorageManager.load(StorageManager.KEYS.ORDERS) || [];
    displayOrders(orders);
}

function displayOrders(orders) {
    const tbody = document.getElementById('ordersTable');
    
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-gray-500">Aucune commande</td></tr>';
        return;
    }

    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>#${order.id}</td>
            <td>
                <div>
                    <div class="font-bold">${order.customerName}</div>
                    <div class="text-sm text-gray-500">${order.customerEmail}</div>
                </div>
            </td>
            <td>${formatDate(order.date)}</td>
            <td class="font-bold">${formatPrice(order.total)}</td>
            <td>
                <select class="select select-sm select-bordered ${getStatusClass(order.status)}" 
                        onchange="updateOrderStatus(${order.id}, this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>En attente</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>En traitement</option>
                    <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Expédiée</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Livrée</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Annulée</option>
                </select>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewOrder(${order.id})">
                    👁️ Voir
                </button>
            </td>
        </tr>
    `).join('');
}

function getStatusClass(status) {
    const classes = {
        'pending': 'select-warning',
        'processing': 'select-info',
        'shipped': 'select-primary',
        'delivered': 'select-success',
        'cancelled': 'select-error'
    };
    return classes[status] || '';
}

// Mettre à jour le statut d'une commande
function updateOrderStatus(id, newStatus) {
    const orders = StorageManager.load(StorageManager.KEYS.ORDERS) || [];
    const order = orders.find(o => o.id === id);
    
    if (!order) return;

    order.status = newStatus;
    order.updatedAt = new Date().toISOString();
    
    StorageManager.save(StorageManager.KEYS.ORDERS, orders);
    showToast('Statut de la commande mis à jour', 'success');
    loadOrders();
}

// Voir les détails d'une commande
function viewOrder(id) {
    const orders = StorageManager.load(StorageManager.KEYS.ORDERS) || [];
    const order = orders.find(o => o.id === id);
    
    if (!order) return;

    document.getElementById('orderNumber').textContent = order.id;
    
    const detailsHtml = `
        <div class="grid grid-cols-2 gap-4">
            <div>
                <h4 class="font-bold mb-2">Informations client</h4>
                <p><strong>Nom :</strong> ${order.customerName}</p>
                <p><strong>Email :</strong> ${order.customerEmail}</p>
                <p><strong>Date :</strong> ${formatDate(order.date)}</p>
            </div>
            <div>
                <h4 class="font-bold mb-2">Statut</h4>
                <span class="badge badge-lg ${getStatusBadgeClass(order.status)}">${getStatusLabel(order.status)}</span>
            </div>
        </div>

        <div class="divider"></div>

        <h4 class="font-bold mb-2">Articles commandés</h4>
        <div class="overflow-x-auto">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Prix unitaire</th>
                        <th>Quantité</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${order.items.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${formatPrice(item.price)}</td>
                            <td>${item.quantity}</td>
                            <td>${formatPrice(item.price * item.quantity)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="divider"></div>

        <div class="flex justify-end">
            <div class="space-y-2 w-64">
                <div class="flex justify-between">
                    <span>Sous-total :</span>
                    <span>${formatPrice(order.subtotal)}</span>
                </div>
                <div class="flex justify-between">
                    <span>Livraison :</span>
                    <span>${formatPrice(order.shipping)}</span>
                </div>
                <div class="flex justify-between">
                    <span>TVA :</span>
                    <span>${formatPrice(order.tax)}</span>
                </div>
                <div class="divider my-1"></div>
                <div class="flex justify-between font-bold text-lg">
                    <span>Total :</span>
                    <span>${formatPrice(order.total)}</span>
                </div>
            </div>
        </div>
    `;

    document.getElementById('orderDetails').innerHTML = detailsHtml;
    document.getElementById('orderModal').showModal();
}

function getStatusBadgeClass(status) {
    const classes = {
        'pending': 'badge-warning',
        'processing': 'badge-info',
        'shipped': 'badge-primary',
        'delivered': 'badge-success',
        'cancelled': 'badge-error'
    };
    return classes[status] || 'badge-ghost';
}

function getStatusLabel(status) {
    const labels = {
        'pending': 'En attente',
        'processing': 'En traitement',
        'shipped': 'Expédiée',
        'delivered': 'Livrée',
        'cancelled': 'Annulée'
    };
    return labels[status] || status;
}

function closeOrderModal() {
    document.getElementById('orderModal').close();
}
