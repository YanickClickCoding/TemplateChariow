# Implementation Plan: Admin Dashboard and Product Card Fix

## Overview

Ce plan d'implémentation couvre deux améliorations majeures du site ShopStyle :
1. Correction des cartes de produits pour éliminer les débordements
2. Création d'un tableau de bord administrateur complet

L'implémentation suivra une approche incrémentale, en commençant par les corrections des cartes de produits, puis en construisant le dashboard admin avec ses fonctionnalités CRUD.

## Tasks

- [x] 1. Corriger les cartes de produits existantes
  - Créer les classes CSS pour le containment et la troncature
  - Mettre à jour toutes les pages avec les cartes de produits
  - Assurer la cohérence visuelle sur toutes les pages
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ]* 1.1 Écrire les tests de propriétés pour les cartes de produits
  - **Property 1: Card content containment**
  - **Property 2: Title truncation with ellipsis**
  - **Property 3: Consistent image aspect ratio**
  - **Property 4: Uniform card heights in grid rows**
  - **Property 5: Responsive layout without overflow**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**

- [x] 2. Créer la structure de base du dashboard admin
  - Créer le dossier `/admin` et les fichiers HTML de base
  - Créer le fichier `admin.js` pour la logique JavaScript
  - Créer les styles CSS pour le layout admin
  - _Requirements: 8.1, 7.1, 7.2, 7.3, 7.4_

- [ ] 3. Implémenter les modèles de données
  - [ ] 3.1 Créer la classe Product avec validation
    - Implémenter le constructeur et les méthodes de validation
    - Implémenter la méthode toJSON()
    - _Requirements: 4.3, 4.5_

  - [ ] 3.2 Créer la classe Order avec calcul de totaux
    - Implémenter le constructeur et calculateTotal()
    - Implémenter updateStatus() avec validation
    - _Requirements: 5.3_

  - [ ] 3.3 Créer la classe Customer
    - Implémenter le constructeur et getFullName()
    - Implémenter addOrder() pour tracking
    - _Requirements: 6.1, 6.4_

  - [ ] 3.4 Créer la classe AdminUser avec authentification
    - Implémenter le constructeur et authenticate()
    - Implémenter updateLastLogin()
    - _Requirements: 2.2, 2.3_

  - [ ] 3.5 Créer le StorageManager pour la persistance
    - Implémenter save(), load(), remove(), clear()
    - Gérer les erreurs de LocalStorage
    - _Requirements: 4.3, 4.5, 4.7, 5.3, 5.1_

- [ ]* 3.6 Écrire les tests unitaires pour les modèles de données
  - Tester la validation des produits
  - Tester le calcul des totaux de commandes
  - Tester les méthodes de Customer
  - Tester l'authentification AdminUser
  - Tester les opérations de StorageManager
  - _Requirements: 4.3, 5.3, 6.4, 2.2, 2.3_

- [ ] 4. Implémenter l'authentification admin
  - [ ] 4.1 Créer la page de connexion (login.html)
    - Créer le formulaire de connexion avec validation
    - Implémenter le style avec DaisyUI
    - _Requirements: 2.1_

  - [ ] 4.2 Implémenter la logique d'authentification
    - Créer la fonction de vérification des credentials
    - Gérer la création de session dans LocalStorage
    - Implémenter la redirection après connexion
    - _Requirements: 2.2, 2.3, 2.4_

  - [ ] 4.3 Implémenter la protection des pages admin
    - Créer une fonction checkAuth() pour vérifier la session
    - Rediriger vers login si non authentifié
    - _Requirements: 2.4_

  - [ ] 4.4 Implémenter la déconnexion
    - Créer la fonction logout()
    - Nettoyer la session et rediriger
    - _Requirements: 2.4_

- [ ]* 4.5 Écrire les tests de propriétés pour l'authentification
  - **Property 6: Valid credentials grant access**
  - **Property 7: Invalid credentials deny access**
  - **Property 8: Session persistence until logout**
  - **Validates: Requirements 2.2, 2.3, 2.4**

- [ ] 5. Créer le dashboard principal avec statistiques
  - [ ] 5.1 Créer la page index.html du dashboard
    - Créer le layout avec sidebar et header
    - Implémenter la structure HTML
    - _Requirements: 8.1_

  - [ ] 5.2 Implémenter le composant StatsCard
    - Créer la classe StatsCard avec render()
    - Afficher les statistiques (revenus, commandes, clients, produits)
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [ ] 5.3 Créer un graphique de tendances des ventes
    - Utiliser Chart.js ou similaire pour le graphique
    - Afficher les données des 7 derniers jours
    - _Requirements: 3.5_

- [ ]* 5.4 Écrire les tests unitaires pour le dashboard
  - Tester l'affichage des statistiques
  - Tester la présence du graphique
  - Tester l'affichage du sidebar
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 8.1_

- [ ] 6. Checkpoint - Vérifier l'authentification et le dashboard
  - S'assurer que l'authentification fonctionne correctement
  - Vérifier que le dashboard affiche les statistiques
  - Demander à l'utilisateur si des questions se posent

- [ ] 7. Implémenter la gestion des produits
  - [ ] 7.1 Créer la page products.html
    - Créer le layout avec tableau de produits
    - Ajouter les boutons d'action (Ajouter, Modifier, Supprimer)
    - _Requirements: 4.1, 4.2_

  - [ ] 7.2 Implémenter le composant ProductTable
    - Créer la classe ProductTable avec render()
    - Afficher tous les produits avec leurs détails
    - _Requirements: 4.1_

  - [ ] 7.3 Implémenter le composant ProductForm
    - Créer la classe ProductForm pour ajout/modification
    - Implémenter la validation des champs
    - _Requirements: 4.2, 4.4_

  - [ ] 7.4 Implémenter les opérations CRUD pour les produits
    - Créer createProduct() pour ajouter un produit
    - Créer updateProduct() pour modifier un produit
    - Créer deleteProduct() avec confirmation
    - Charger et afficher les produits depuis StorageManager
    - _Requirements: 4.3, 4.5, 4.6, 4.7_

- [ ]* 7.5 Écrire les tests de propriétés pour la gestion des produits
  - **Property 9: All products displayed in list**
  - **Property 10: Product creation persistence**
  - **Property 11: Product edit form population**
  - **Property 12: Product update persistence**
  - **Property 13: Product deletion removes from catalog**
  - **Validates: Requirements 4.1, 4.3, 4.4, 4.5, 4.7**

- [ ]* 7.6 Écrire les tests unitaires pour la gestion des produits
  - Tester l'affichage du formulaire d'ajout
  - Tester la confirmation de suppression
  - Tester la validation des formulaires
  - _Requirements: 4.2, 4.6_

- [ ] 8. Implémenter la gestion des commandes
  - [ ] 8.1 Créer la page orders.html
    - Créer le layout avec tableau de commandes
    - Ajouter les filtres par statut
    - Ajouter la barre de recherche
    - _Requirements: 5.1, 5.4, 5.5_

  - [ ] 8.2 Implémenter le composant OrderTable
    - Créer la classe OrderTable avec render()
    - Afficher toutes les commandes avec leur statut
    - Implémenter getStatusBadge() pour les badges colorés
    - _Requirements: 5.1_

  - [ ] 8.3 Implémenter la vue détaillée des commandes
    - Créer viewOrder() pour afficher les détails
    - Afficher les articles, client, et totaux
    - _Requirements: 5.2_

  - [ ] 8.4 Implémenter la mise à jour du statut des commandes
    - Créer updateOrderStatus() avec validation
    - Persister les changements dans StorageManager
    - _Requirements: 5.3_

  - [ ] 8.5 Implémenter le filtrage et la recherche
    - Créer filterOrdersByStatus() pour le filtrage
    - Créer searchOrders() pour la recherche
    - _Requirements: 5.4, 5.5_

- [ ]* 8.6 Écrire les tests de propriétés pour la gestion des commandes
  - **Property 14: All orders displayed with status**
  - **Property 15: Order details display**
  - **Property 16: Order status update persistence**
  - **Property 17: Order filtering by status**
  - **Property 18: Order search functionality**
  - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

- [ ] 9. Implémenter la gestion des clients
  - [ ] 9.1 Créer la page customers.html
    - Créer le layout avec tableau de clients
    - Ajouter la barre de recherche
    - _Requirements: 6.1, 6.3_

  - [ ] 9.2 Implémenter le composant CustomerTable
    - Créer la classe CustomerTable avec render()
    - Afficher tous les clients avec leurs informations
    - _Requirements: 6.1_

  - [ ] 9.3 Implémenter la vue détaillée des clients
    - Créer viewCustomer() pour afficher les détails
    - Afficher l'historique des commandes du client
    - _Requirements: 6.2, 6.4_

  - [ ] 9.4 Implémenter la recherche de clients
    - Créer searchCustomers() pour rechercher par nom ou email
    - _Requirements: 6.3_

- [ ]* 9.5 Écrire les tests de propriétés pour la gestion des clients
  - **Property 19: All customers displayed in list**
  - **Property 20: Customer details display with order history**
  - **Property 21: Customer search functionality**
  - **Validates: Requirements 6.1, 6.2, 6.3, 6.4**

- [ ] 10. Implémenter la navigation et le responsive design
  - [ ] 10.1 Créer le composant AdminSidebar
    - Implémenter le menu de navigation
    - Ajouter les icônes et labels
    - _Requirements: 8.1_

  - [ ] 10.2 Implémenter la navigation entre les sections
    - Créer les fonctions de navigation
    - Gérer l'état actif des menu items
    - _Requirements: 8.2, 8.3_

  - [ ] 10.3 Implémenter le responsive design
    - Créer les styles pour mobile, tablet, desktop
    - Implémenter le menu collapsible pour mobile
    - Tester tous les breakpoints
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 8.4_

- [ ]* 10.4 Écrire les tests de propriétés pour la navigation
  - **Property 22: Menu navigation functionality**
  - **Property 23: Active menu item highlighting**
  - **Property 24: Responsive layout adaptation**
  - **Validates: Requirements 8.2, 8.3, 7.4**

- [ ]* 10.5 Écrire les tests unitaires pour le responsive design
  - Tester le layout mobile
  - Tester le layout tablet
  - Tester le layout desktop
  - Tester le menu collapsible mobile
  - _Requirements: 7.1, 7.2, 7.3, 8.4_

- [ ] 11. Initialiser les données de démonstration
  - Créer un script d'initialisation pour générer des données de test
  - Générer des produits, commandes, et clients de démonstration
  - Créer un utilisateur admin par défaut
  - _Requirements: Toutes les requirements de gestion de données_

- [ ] 12. Checkpoint final - Tests et validation
  - Exécuter tous les tests (unitaires et de propriétés)
  - Vérifier que toutes les fonctionnalités fonctionnent
  - Tester sur différents navigateurs et tailles d'écran
  - S'assurer que tous les tests passent
  - Demander à l'utilisateur si des questions se posent

## Notes

- Les tâches marquées avec `*` sont optionnelles et peuvent être sautées pour un MVP plus rapide
- Chaque tâche référence les exigences spécifiques pour la traçabilité
- Les checkpoints assurent une validation incrémentale
- Les tests de propriétés valident la correction universelle
- Les tests unitaires valident des exemples spécifiques et cas limites
- L'implémentation suit une approche bottom-up : modèles → authentification → fonctionnalités
