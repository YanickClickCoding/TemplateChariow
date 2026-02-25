# Plan d'implémentation : Migration ShopStyle vers DaisyUI

## Vue d'ensemble

Ce document liste les tâches nécessaires pour créer les 5 pages manquantes du site ShopStyle avec DaisyUI v4.6.0.

## Tâches

### Phase 1 : Préparation

- [x] 1. Vérifier la structure du projet
  - Confirmer que toutes les pages existantes utilisent DaisyUI
  - Vérifier que les liens dans les footers pointent vers les bonnes pages
  - _Référence : requirements.md - US-1_

### Phase 2 : Création des pages

- [x] 2. Créer mentions-legales.html
  - [x] 2.1 Copier la structure de base depuis a-propos.html
    - Navbar complète
    - Footer complet
    - _Référence : design.md - Section mentions-legales_
  
  - [x] 2.2 Créer le hero section
    - Titre : "Mentions Légales"
    - Sous-titre : "Informations légales et réglementaires"
    - Gradient : from-primary to-secondary
    - _Référence : design.md - Hero Section_
  
  - [x] 2.3 Créer les cards de contenu
    - Card "Éditeur du site" avec informations entreprise
    - Card "Hébergeur" avec coordonnées OVH
    - Card "Propriété intellectuelle"
    - Card "Données personnelles" avec lien RGPD
    - Card "Cookies"
    - Card "Responsabilité"
    - _Référence : design.md - mentions-legales Cards_

- [x] 3. Créer plan-site.html
  - [x] 3.1 Copier la structure de base depuis a-propos.html
    - Navbar complète
    - Footer complet
    - _Référence : design.md - Section plan-site_
  
  - [x] 3.2 Créer le hero section
    - Titre : "Plan du Site"
    - Sous-titre : "Accédez rapidement à toutes nos pages"
    - Gradient : from-primary to-secondary
    - _Référence : design.md - Hero Section_
  
  - [x] 3.3 Créer les cards de navigation
    - Card "Navigation principale" avec menu component
    - Card "Catégories produits"
    - Card "Mon compte"
    - Card "Service client"
    - Card "À propos"
    - Card "Informations légales"
    - Layout : Grille 2 colonnes (lg:grid-cols-2)
    - _Référence : design.md - plan-site Cards_

- [x] 4. Créer magasins.html
  - [x] 4.1 Copier la structure de base depuis a-propos.html
    - Navbar complète
    - Footer complet
    - _Référence : design.md - Section magasins_
  
  - [x] 4.2 Créer le hero section
    - Titre : "Nos Magasins"
    - Sous-titre : "Retrouvez-nous dans toute la France"
    - Gradient : from-primary to-secondary
    - _Référence : design.md - Hero Section_
  
  - [x] 4.3 Créer la section stats
    - Stats component avec 3 statistiques
    - 15 magasins, 12 villes, 1 pays
    - _Référence : design.md - magasins Stats Section_
  
  - [x] 4.4 Créer les cards magasins
    - 6 cards de magasins (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse)
    - Badges pour "Flagship" et "Nouveau"
    - Adresse, horaires, téléphone pour chaque magasin
    - Layout : Grille 3 colonnes (lg:grid-cols-3)
    - _Référence : design.md - magasins Cards_
  
  - [x] 4.5 Ajouter alert informative
    - Alert info sur les gestes barrières
    - _Référence : design.md - magasins Alert_

- [x] 5. Créer carrieres.html
  - [x] 5.1 Copier la structure de base depuis a-propos.html
    - Navbar complète
    - Footer complet
    - _Référence : design.md - Section carrieres_
  
  - [x] 5.2 Créer le hero section
    - Titre : "Rejoignez l'Aventure ShopStyle"
    - Sous-titre : "Découvrez nos opportunités de carrière"
    - Gradient : from-primary to-secondary
    - _Référence : design.md - Hero Section_
  
  - [x] 5.3 Créer la section "Pourquoi nous rejoindre"
    - 4 cards avantages (Évolution, Formation, Équilibre, Avantages)
    - Icônes emoji pour chaque card
    - Layout : Grille 4 colonnes (lg:grid-cols-4)
    - _Référence : design.md - carrieres Cards avantages_
  
  - [x] 5.4 Créer la section "Postes ouverts"
    - 4 cards offres d'emploi
    - Badges pour types de contrat (CDI, CDD, Alternance)
    - Boutons "Postuler" sur chaque card
    - Layout : Grille 2 colonnes (lg:grid-cols-2)
    - _Référence : design.md - carrieres Cards offres_
  
  - [x] 5.5 Ajouter alert candidature spontanée
    - Alert success avec email recrutement
    - _Référence : design.md - carrieres Alert_

- [x] 6. Créer presse.html
  - [x] 6.1 Copier la structure de base depuis a-propos.html
    - Navbar complète
    - Footer complet
    - _Référence : design.md - Section presse_
  
  - [x] 6.2 Créer le hero section
    - Titre : "Espace Presse"
    - Sous-titre : "Actualités et communiqués de presse"
    - Gradient : from-primary to-secondary
    - _Référence : design.md - Hero Section_
  
  - [x] 6.3 Créer les cards communiqués
    - 5 cards de communiqués de presse
    - Badges avec dates
    - Boutons "Lire la suite" outline
    - Layout : 1 colonne empilée
    - _Référence : design.md - presse Cards communiqués_
  
  - [x] 6.4 Créer la card contact presse
    - Card avec bg-primary text-primary-content
    - Informations de contact (nom, email, téléphone)
    - _Référence : design.md - presse Contact_

### Phase 3 : Vérification et tests

- [ ] 7. Vérifier la cohérence visuelle
  - [ ] 7.1 Vérifier que toutes les navbars sont identiques
    - Même structure de menu
    - Mêmes liens
    - Même style
    - _Référence : design.md - Navbar_
  
  - [ ] 7.2 Vérifier que tous les footers sont identiques
    - Même structure 4 colonnes
    - Mêmes liens
    - Même copyright
    - _Référence : design.md - Footer_
  
  - [ ] 7.3 Vérifier les gradients des hero sections
    - Tous utilisent from-primary to-secondary
    - Texte blanc sur gradient
    - _Référence : design.md - Hero Section_

- [ ] 8. Tester la navigation
  - [ ] 8.1 Tester tous les liens internes
    - Liens navbar vers toutes les pages
    - Liens footer vers toutes les pages
    - Liens dans le contenu
    - _Référence : requirements.md - US-3_
  
  - [ ] 8.2 Vérifier les liens vers les nouvelles pages
    - Liens depuis index.html
    - Liens depuis a-propos.html
    - Liens depuis autres pages
    - _Référence : requirements.md - US-3_

- [ ] 9. Tester la responsivité
  - [ ] 9.1 Tester sur mobile (< 768px)
    - Menu hamburger fonctionnel
    - Grilles en 1 colonne
    - Contenu lisible
    - _Référence : design.md - Responsive Design_
  
  - [ ] 9.2 Tester sur tablet (768px - 1024px)
    - Grilles en 2 colonnes
    - Navigation adaptée
    - _Référence : design.md - Responsive Design_
  
  - [ ] 9.3 Tester sur desktop (> 1024px)
    - Grilles en 3-4 colonnes
    - Layout optimal
    - _Référence : design.md - Responsive Design_

- [ ] 10. Validation finale
  - [ ] 10.1 Valider le HTML
    - Pas d'erreurs de syntaxe
    - Balises correctement fermées
    - _Référence : design.md - Validation_
  
  - [ ] 10.2 Vérifier l'orthographe
    - Tout le contenu en français
    - Pas de fautes d'orthographe
    - _Référence : requirements.md - Contraintes_
  
  - [ ] 10.3 Vérifier l'accessibilité de base
    - Balises sémantiques
    - Contraste suffisant
    - Navigation au clavier
    - _Référence : design.md - Accessibilité_

### Phase 4 : Nettoyage (optionnel)

- [ ] 11. Archiver ou supprimer styles.css
  - Vérifier qu'aucune page n'utilise styles.css
  - Supprimer ou archiver le fichier
  - _Référence : requirements.md - Phase 4_

## Notes

- Chaque page doit être créée dans l'ordre recommandé (mentions-legales → plan-site → magasins → carrieres → presse)
- Toujours copier la navbar et le footer depuis une page existante pour garantir la cohérence
- Utiliser les composants DaisyUI spécifiés dans le design.md
- Tester chaque page après sa création avant de passer à la suivante

## Références

- **requirements.md** : Spécifications et user stories
- **design.md** : Architecture et composants détaillés
- **Pages de référence** : a-propos.html, livraison.html, retours.html
