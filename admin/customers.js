// Vérifier l'authentification
checkAuth();

// Charger les clients au chargement de la page
loadCustomers();

// Gestion de la recherche
document.getElementById('searchCustomers').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const customers = StorageManager.load(StorageManager.KEYS.CUSTOMERS) || [];
    const filtered = customers.filter(c => 
        c.firstName.toLowerCase().includes(searchTerm) ||
        c.lastName.toLowerCase().includes(searchTerm) ||
        c.email.toLowerCase().includes(searchTerm)
    );
    displayCustomers(filtered);
});

// Charger et afficher les clients
function loadCustomers() {
    const customers = StorageManager.load(StorageManager.KEYS.CUSTOMERS) || [];
    displayCustomers(customers);
}

function displayCustomers(customers) {
    const tbody = document.getElementById('customersTable');
    
    if (customers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-gray-500">Aucun client</td></tr>';
        return;
    }

    tbody.innerHTML = customers.map(customer => `
        <tr>
            <td>
                <div class="flex items-center gap-3">
                    <div class="avatar placeholder">
                        <div class="bg-primary text-primary-content rounded-full w-12">
                            <span class="text-xl">${customer.firstName.charAt(0)}${customer.lastName.charAt(0)}</span>
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">${customer.firstName} ${customer.lastName}</div>
                        <div class="text-sm text-gray-500">Client depuis ${formatDate(customer.createdAt)}</div>
                    </div>
                </div>
            </td>
            <td>${customer.email}</td>
            <td>${customer.phone || 'N/A'}</td>
            <td>
                <span class="badge badge-primary">${customer.orders.length}</span>
            </td>
            <td class="font-bold">${formatPrice(customer.totalSpent)}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewCustomer(${customer.id})">
                    👁️ Voir
                </button>
            </td>
        </tr>
    `).join('');
}

// Voir les détails d'un client
function viewCustomer(id) {
    const customers = StorageManager.load(StorageManager.KEYS.CUSTOMERS) || [];
    const customer = customers.find(c => c.id === id);
    
    if (!customer) return;

    const orders = StorageManager.load(StorageManager.KEYS.ORDERS) || [];
    const customerOrders = orders.filter(o => customer.orders.includes(o.id));

    const detailsHtml = `
        <div class="grid grid-cols-2 gap-4">
            <div>
                <h4 class="font-bold mb-2">Informations personnelles</h4>
                <p><strong>Nom complet :</strong> ${customer.firstName} ${customer.lastName}</p>
                <p><strong>Email :</strong> ${customer.email}</p>
                <p><strong>Téléphone :</strong> ${customer.phone || 'N/A'}</p>
                <p><strong>Client depuis :</strong> ${formatDate(customer.createdAt)}</p>
            </div>
            <div>
                <h4 class="font-bold mb-2">Statistiques</h4>
                <div class="stats stats-vertical shadow">
                    <div class="stat">
                        <div class="stat-title">Commandes</div>
                        <div class="stat-value text-primary">${customer.orders.length}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-title">Total dépensé</div>
                        <div class="stat-value text-secondary">${formatPrice(customer.totalSpent)}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <h4 class="font-bold mb-2">Historique des commandes</h4>
        ${customerOrders.length > 0 ? `
            <div class="overflow-x-auto">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>N° Commande</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${customerOrders.map(order => `
                            <tr>
                                <td>#${order.id}</td>
                                <td>${formatDate(order.date)}</td>
                                <td>${formatPrice(order.total)}</td>
                                <td><span class="badge ${getStatusBadgeClass(order.status)}">${getStatusLabel(order.status)}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        ` : '<p class="text-gray-500 text-center py-4">Aucune commande</p>'}
    `;

    document.getElementById('customerDetails').innerHTML = detailsHtml;
    document.getElementById('customerModal').showModal();
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

function closeCustomerModal() {
    document.getElementById('customerModal').close();
}
