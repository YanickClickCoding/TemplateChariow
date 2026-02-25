# Spécification : Migration ShopStyle vers DaisyUI

## Vue d'ensemble du projet

**Projet** : ShopStyle - Site e-commerce français  
**Objectif** : Migrer toutes les pages HTML du site vers DaisyUI v4.6.0 avec Tailwind CSS  
**Statut** : En cours  
**Date de création** : 25 février 2026

## Contexte

ShopStyle est un site e-commerce français avec plusieurs pages HTML. Le projet nécessite une migration complète de l'ancien système de styles CSS vers DaisyUI pour moderniser l'interface utilisateur et améliorer la cohérence visuelle.

## User Stories

### US-1 : Pages converties avec succès
**En tant qu'** utilisateur du site  
**Je veux** que toutes les pages utilisent DaisyUI  
**Afin de** bénéficier d'une interface moderne et cohérente

**Critères d'acceptation** :
- ✅ `index.html` - Page d'accueil convertie
- ✅ `homme.html` - Page homme convertie
- ✅ `panier.html` - Page panier convertie
- ✅ `contact.html` - Page contact convertie
- ✅ `femme.html` - Page femme convertie
- ✅ `a-propos.html` - Page à propos convertie
- ✅ `livraison.html` - Page livraison convertie
- ✅ `retours.html` - Page retours convertie
- ✅ `cgv.html` - Page conditions générales de vente convertie
- ✅ `confidentialite.html` - Page confidentialité convertie
- ✅ `faq.html` - Page FAQ convertie
- ✅ `favoris.html` - Page favoris convertie
- ✅ `soldes.html` - Page soldes convertie
- ✅ `nouveautes.html` - Page nouveautés convertie
- ✅ `accessoires.html` - Page accessoires convertie
- ✅ `enfants.html` - Page enfants convertie
- ✅ `compte.html` - Page compte convertie

### US-2 : Pages à recréer
**En tant que** développeur  
**Je dois** recréer les pages supprimées avec DaisyUI  
**Afin de** compléter la migration du site

**Critères d'acceptation** :
- ❌ `mentions-legales.html` - Page mentions légales à recréer
- ❌ `plan-site.html` - Page plan du site à recréer
- ❌ `magasins.html` - Page magasins/boutiques à recréer
- ❌ `carrieres.html` - Page carrières à recréer
- ❌ `presse.html` - Page presse à recréer

### US-3 : Cohérence de la navigation
**En tant qu'** utilisateur  
**Je veux** que tous les liens de navigation fonctionnent correctement  
**Afin de** naviguer facilement sur le site

**Critères d'acceptation** :
- Tous les liens vers `femme.html` doivent être vérifiés et fonctionnels
- La navbar doit être identique sur toutes les pages
- Le footer doit être identique sur toutes les pages
- Les liens internes doivent pointer vers les bonnes pages

## Spécifications techniques

### Architecture des pages

Chaque page HTML doit suivre cette structure :

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Titre de la page] - ShopStyle</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Navbar -->
    <!-- Hero/Header Section -->
    <!-- Main Content -->
    <!-- Footer -->
</body>
</html>
```

### Composants DaisyUI requis

#### 1. Navbar (obligatoire sur toutes les pages)
- Sticky top avec `sticky top-0 z-50`
- Logo "ShopStyle" avec lien vers `index.html`
- Menu responsive avec dropdown pour mobile
- Liens de navigation :
  - Accueil
  - Nouveautés
  - Femme
  - Homme
  - Enfants
  - Accessoires
  - Soldes (en rouge avec `text-error`)
  - Contact
- Barre de recherche (cachée sur mobile)
- Icônes compte, favoris, panier

#### 2. Hero/Header Section
- Gradient background : `bg-gradient-to-r from-primary to-secondary`
- Titre de la page en `text-4xl` ou `text-5xl`
- Sous-titre ou description
- Padding vertical : `py-20` ou `py-16`

#### 3. Main Content
- Container avec `max-w-7xl mx-auto px-4`
- Utilisation de cards DaisyUI : `card bg-base-100 shadow-xl`
- Composants appropriés selon le contenu :
  - `stats` pour les statistiques
  - `alert` pour les informations importantes
  - `badge` pour les tags
  - `steps` pour les processus
  - `collapse` pour les FAQ
  - `table` pour les données tabulaires

#### 4. Footer (obligatoire sur toutes les pages)
- Background : `bg-base-200`
- 4 colonnes de navigation :
  - À propos
  - Service client
  - Informations légales
  - Suivez-nous
- Copyright en bas

### Thème et couleurs

- **Thème** : `data-theme="light"`
- **Couleurs principales** :
  - Primary : Bleu (DaisyUI default)
  - Secondary : Violet (DaisyUI default)
  - Error : Rouge pour les soldes et alertes
  - Base-100 : Blanc pour les cards
  - Base-200 : Gris clair pour le footer

### Responsive Design

- Mobile first approach
- Breakpoints Tailwind :
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px
- Menu hamburger sur mobile avec dropdown
- Grilles adaptatives : `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Pages à recréer - Spécifications détaillées

### 1. mentions-legales.html
**Contenu** : Mentions légales du site  
**Composants** :
- Hero avec titre "Mentions Légales"
- Cards pour chaque section :
  - Éditeur du site
  - Hébergeur
  - Propriété intellectuelle
  - Données personnelles
  - Cookies
  - Responsabilité

### 2. plan-site.html
**Contenu** : Plan du site avec tous les liens  
**Composants** :
- Hero avec titre "Plan du Site"
- Cards organisées par catégorie :
  - Navigation principale
  - Catégories produits
  - Service client
  - Informations légales
- Utilisation de listes avec `menu` component

### 3. magasins.html
**Contenu** : Liste des boutiques physiques  
**Composants** :
- Hero avec titre "Nos Magasins"
- Cards pour chaque magasin avec :
  - Nom de la ville
  - Adresse complète
  - Horaires d'ouverture
  - Téléphone
  - Badge pour "Nouveau" si applicable
- Stats component pour le nombre total de magasins

### 4. carrieres.html
**Contenu** : Offres d'emploi et recrutement  
**Composants** :
- Hero avec titre "Rejoignez-nous"
- Section "Pourquoi nous rejoindre" avec cards
- Section "Postes ouverts" avec cards pour chaque offre :
  - Titre du poste
  - Localisation
  - Type de contrat (badge)
  - Description
  - Bouton "Postuler"
- Alert pour encourager les candidatures spontanées

### 5. presse.html
**Contenu** : Communiqués de presse et actualités  
**Composants** :
- Hero avec titre "Espace Presse"
- Cards pour chaque communiqué :
  - Date (badge)
  - Titre
  - Résumé
  - Lien "Lire la suite"
- Section contact presse avec card

## Tâches d'implémentation

### Phase 1 : Vérification et corrections ✅
- [x] Vérifier les pages déjà converties
- [x] Identifier les pages manquantes
- [ ] Vérifier tous les liens vers femme.html

### Phase 2 : Recréation des pages manquantes
- [ ] Créer mentions-legales.html
- [ ] Créer plan-site.html
- [ ] Créer magasins.html
- [ ] Créer carrieres.html
- [ ] Créer presse.html

### Phase 3 : Tests et validation
- [ ] Tester la navigation sur toutes les pages
- [ ] Vérifier la responsivité mobile/desktop
- [ ] Valider la cohérence visuelle
- [ ] Tester tous les liens internes
- [ ] Vérifier l'accessibilité

### Phase 4 : Nettoyage
- [ ] Supprimer ou archiver styles.css si non utilisé
- [ ] Vérifier qu'aucune page n'utilise l'ancien CSS
- [ ] Documenter les changements

## Contraintes et règles

1. **Langue** : Tout le contenu doit être en français
2. **Framework** : DaisyUI v4.6.0 uniquement
3. **CDN** : Utiliser les CDN officiels (pas d'installation locale)
4. **Cohérence** : Navbar et footer identiques sur toutes les pages
5. **Accessibilité** : Utiliser les attributs ARIA appropriés
6. **Performance** : Minimiser les composants inutiles
7. **SEO** : Titres de page descriptifs et uniques

## Dépendances

- DaisyUI v4.6.0 : https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css
- Tailwind CSS : https://cdn.tailwindcss.com

## Risques et limitations

1. **Liens cassés** : Certaines pages référencées dans les menus n'existent pas encore
2. **Contenu manquant** : Le contenu des pages à recréer doit être défini
3. **Compatibilité** : Tester sur différents navigateurs
4. **Maintenance** : Utilisation de CDN (dépendance externe)

## Métriques de succès

- ✅ 17 pages converties sur 22 (77%)
- ❌ 5 pages à recréer (23%)
- 🎯 Objectif : 100% des pages en DaisyUI
- 🎯 Tous les liens fonctionnels
- 🎯 Design cohérent sur toutes les pages

## Notes de développement

- Les pages converties utilisent des composants variés (cards, alerts, stats, steps, badges)
- Le style est moderne et épuré
- La navigation est fluide avec sticky navbar
- Les gradients sont utilisés pour les headers
- Les icônes SVG sont intégrées directement dans le HTML

## Prochaines étapes

1. Vérifier et corriger les liens vers femme.html dans index.html
2. Créer les 5 pages manquantes avec le contenu approprié
3. Tester l'ensemble du site
4. Valider la cohérence visuelle et fonctionnelle
