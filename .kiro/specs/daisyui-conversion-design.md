# Document de Design : Migration ShopStyle vers DaisyUI

## Vue d'ensemble

Ce document détaille l'architecture et les composants DaisyUI à utiliser pour créer les 5 pages manquantes du site ShopStyle. Chaque page suivra la même structure de base que les pages existantes pour assurer la cohérence visuelle.

## Architecture globale

### Structure HTML commune

Toutes les pages suivent cette architecture :

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
    <!-- Meta tags -->
    <!-- DaisyUI + Tailwind CSS -->
</head>
<body>
    <!-- Navbar (sticky) -->
    <!-- Hero Section (gradient) -->
    <!-- Main Content (container) -->
    <!-- Footer -->
</body>
</html>
```

### Composants réutilisables

#### 1. Navbar
- **Classe principale** : `navbar bg-base-100 shadow-lg sticky top-0 z-50`
- **Responsive** : Dropdown menu pour mobile avec `lg:hidden`
- **Navigation** : Menu horizontal avec `menu menu-horizontal`
- **Actions** : Recherche, compte, favoris, panier

#### 2. Hero Section
- **Classe** : `bg-gradient-to-r from-primary to-secondary py-12`
- **Contenu** : Titre (h1) + sous-titre (p)
- **Couleurs** : Texte blanc sur gradient

#### 3. Footer
- **Structure** : 4 colonnes de navigation
- **Sections** :
  - À propos (a-propos, magasins, carrieres, presse)
  - Service Client (contact, livraison, retours, faq)
  - Informations (cgv, confidentialite, mentions-legales, plan-site)
  - Suivez-nous (réseaux sociaux)

## Design des pages manquantes

### 1. mentions-legales.html

#### Objectif
Page présentant les mentions légales obligatoires du site e-commerce.

#### Structure

**Hero Section**
```
Titre : "Mentions Légales"
Sous-titre : "Informations légales et réglementaires"
Gradient : from-primary to-secondary
```

**Contenu principal**
- Container : `max-w-7xl mx-auto px-4 py-12`
- Layout : Cards empilées verticalement avec `space-y-6`

**Cards à créer** :

1. **Éditeur du site**
   - Composant : `card bg-base-100 shadow-xl`
   - Contenu :
     - Nom de l'entreprise : ShopStyle SAS
     - Adresse : 123 Avenue des Champs-Élysées, 75008 Paris
     - Capital social : 500 000 €
     - RCS : Paris B 123 456 789
     - SIRET : 123 456 789 00012
     - TVA : FR 12 123456789
     - Directeur de publication : Jean Dupont

2. **Hébergeur**
   - Nom : OVH SAS
   - Adresse : 2 rue Kellermann, 59100 Roubaix
   - Téléphone : 1007

3. **Propriété intellectuelle**
   - Texte sur les droits d'auteur
   - Protection des contenus
   - Utilisation des marques

4. **Données personnelles**
   - Lien vers la politique de confidentialité
   - Droits des utilisateurs (RGPD)
   - Contact DPO : dpo@shopstyle.fr

5. **Cookies**
   - Utilisation des cookies
   - Gestion des préférences
   - Cookies tiers

6. **Responsabilité**
   - Limitations de responsabilité
   - Disponibilité du service
   - Liens externes

**Composants DaisyUI utilisés** :
- `card`, `card-body`, `card-title`
- `badge` pour les informations importantes
- `link` pour les emails et liens

---

### 2. plan-site.html

#### Objectif
Plan du site avec tous les liens organisés par catégorie.

#### Structure

**Hero Section**
```
Titre : "Plan du Site"
Sous-titre : "Accédez rapidement à toutes nos pages"
Gradient : from-primary to-secondary
```

**Contenu principal**
- Container : `max-w-7xl mx-auto px-4 py-12`
- Layout : Grille 2 colonnes sur desktop `grid grid-cols-1 lg:grid-cols-2 gap-6`

**Cards à créer** :

1. **Navigation principale**
   - Accueil
   - Nouveautés
   - Soldes
   - Contact

2. **Catégories produits**
   - Femme
   - Homme
   - Enfants
   - Accessoires

3. **Mon compte**
   - Se connecter
   - S'inscrire
   - Mon compte
   - Mes commandes
   - Mes favoris
   - Mon panier

4. **Service client**
   - Contact
   - Livraison
   - Retours
   - FAQ

5. **À propos**
   - Qui sommes-nous
   - Nos magasins
   - Carrières
   - Presse

6. **Informations légales**
   - Conditions générales de vente
   - Politique de confidentialité
   - Mentions légales
   - Plan du site

**Composants DaisyUI utilisés** :
- `card`, `card-body`, `card-title`
- `menu` pour les listes de liens
- `divider` pour séparer les sections
- `link link-hover` pour les liens

**Style des liens** :
```html
<ul class="menu bg-base-100 rounded-box">
  <li><a href="index.html">Accueil</a></li>
  <li><a href="nouveautes.html">Nouveautés</a></li>
  ...
</ul>
```

---

### 3. magasins.html

#### Objectif
Liste des boutiques physiques ShopStyle avec leurs informations.

#### Structure

**Hero Section**
```
Titre : "Nos Magasins"
Sous-titre : "Retrouvez-nous dans toute la France"
Gradient : from-primary to-secondary
```

**Stats Section**
- Composant : `stats shadow` avec 3 statistiques
- Stats :
  - Nombre de magasins : 15
  - Villes : 12
  - Pays : 1 (France)

**Contenu principal**
- Container : `max-w-7xl mx-auto px-4 py-12`
- Layout : Grille 3 colonnes `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

**Cards magasins** (créer 6 exemples) :

1. **Paris - Champs-Élysées**
   - Badge : `badge badge-primary` "Flagship"
   - Adresse : 123 Avenue des Champs-Élysées, 75008 Paris
   - Horaires : Lun-Sam 10h-20h, Dim 11h-19h
   - Téléphone : 01 23 45 67 89
   - Icône : 📍

2. **Lyon - Part-Dieu**
   - Adresse : Centre Commercial Part-Dieu, 69003 Lyon
   - Horaires : Lun-Sam 10h-20h
   - Téléphone : 04 12 34 56 78

3. **Marseille - Vieux-Port**
   - Badge : `badge badge-success` "Nouveau"
   - Adresse : 45 Quai du Port, 13002 Marseille
   - Horaires : Lun-Sam 10h-19h
   - Téléphone : 04 91 23 45 67

4. **Bordeaux - Centre**
   - Adresse : 78 Rue Sainte-Catherine, 33000 Bordeaux
   - Horaires : Lun-Sam 10h-19h30
   - Téléphone : 05 56 12 34 56

5. **Lille - Euralille**
   - Adresse : Centre Commercial Euralille, 59000 Lille
   - Horaires : Lun-Sam 10h-20h
   - Téléphone : 03 20 12 34 56

6. **Toulouse - Capitole**
   - Adresse : 12 Rue d'Alsace-Lorraine, 31000 Toulouse
   - Horaires : Lun-Sam 10h-19h
   - Téléphone : 05 61 23 45 67

**Composants DaisyUI utilisés** :
- `stats`, `stat`, `stat-title`, `stat-value`
- `card`, `card-body`, `card-title`
- `badge` pour les tags (Flagship, Nouveau)
- `divider` pour séparer les informations

**Alert informative** :
```html
<div class="alert alert-info">
  <svg>...</svg>
  <span>Tous nos magasins respectent les gestes barrières</span>
</div>
```

---

### 4. carrieres.html

#### Objectif
Page recrutement avec présentation de l'entreprise et offres d'emploi.

#### Structure

**Hero Section**
```
Titre : "Rejoignez l'Aventure ShopStyle"
Sous-titre : "Découvrez nos opportunités de carrière"
Gradient : from-primary to-secondary
```

**Section "Pourquoi nous rejoindre"**
- Container : `max-w-7xl mx-auto px-4 py-12`
- Layout : Grille 4 colonnes `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`

**Cards avantages** :

1. **Évolution**
   - Icône : 📈
   - Titre : "Évolution de carrière"
   - Description : "Des opportunités de progression"

2. **Formation**
   - Icône : 🎓
   - Titre : "Formation continue"
   - Description : "Développez vos compétences"

3. **Équilibre**
   - Icône : ⚖️
   - Titre : "Équilibre vie pro/perso"
   - Description : "Télétravail et flexibilité"

4. **Avantages**
   - Icône : 🎁
   - Titre : "Avantages sociaux"
   - Description : "Mutuelle, tickets resto, CE"

**Section "Postes ouverts"**
- Layout : Grille 2 colonnes `grid grid-cols-1 lg:grid-cols-2 gap-6`

**Cards offres d'emploi** (créer 4 exemples) :

1. **Développeur Full-Stack**
   - Badge : `badge badge-primary` "CDI"
   - Localisation : Paris
   - Description : Développement de notre plateforme e-commerce
   - Technologies : React, Node.js, MongoDB
   - Bouton : `btn btn-primary` "Postuler"

2. **Responsable Marketing Digital**
   - Badge : `badge badge-primary` "CDI"
   - Localisation : Lyon
   - Description : Stratégie marketing et acquisition
   - Bouton : `btn btn-primary` "Postuler"

3. **Chef de Projet E-commerce**
   - Badge : `badge badge-secondary` "CDD"
   - Localisation : Paris
   - Description : Gestion de projets digitaux
   - Bouton : `btn btn-primary` "Postuler"

4. **Vendeur/Vendeuse**
   - Badge : `badge badge-accent` "Alternance"
   - Localisation : Bordeaux
   - Description : Conseil client en boutique
   - Bouton : `btn btn-primary` "Postuler"

**Alert candidature spontanée** :
```html
<div class="alert alert-success">
  <svg>...</svg>
  <div>
    <h3 class="font-bold">Candidature spontanée</h3>
    <div class="text-xs">Vous ne trouvez pas le poste idéal ? Envoyez-nous votre CV à recrutement@shopstyle.fr</div>
  </div>
</div>
```

**Composants DaisyUI utilisés** :
- `card`, `card-body`, `card-title`, `card-actions`
- `badge` pour les types de contrat
- `btn btn-primary` pour les boutons
- `alert alert-success` pour l'info candidature
- `divider` pour séparer les sections

---

### 5. presse.html

#### Objectif
Espace presse avec communiqués et actualités de l'entreprise.

#### Structure

**Hero Section**
```
Titre : "Espace Presse"
Sous-titre : "Actualités et communiqués de presse"
Gradient : from-primary to-secondary
```

**Contenu principal**
- Container : `max-w-7xl mx-auto px-4 py-12`
- Layout : Grille 1 colonne avec cards empilées

**Cards communiqués** (créer 5 exemples) :

1. **Ouverture nouveau magasin Marseille**
   - Badge : `badge badge-success` "25 Fév 2026"
   - Titre : "ShopStyle ouvre son 15ème magasin à Marseille"
   - Résumé : "Nous sommes fiers d'annoncer l'ouverture de notre nouvelle boutique au Vieux-Port de Marseille. Un espace de 300m² dédié à la mode pour toute la famille."
   - Bouton : `btn btn-outline btn-primary` "Lire la suite"

2. **Collection Printemps 2026**
   - Badge : `badge badge-info` "15 Fév 2026"
   - Titre : "Découvrez notre collection Printemps-Été 2026"
   - Résumé : "Une collection colorée et éco-responsable qui célèbre le retour des beaux jours. Plus de 200 nouveaux modèles disponibles en ligne et en magasin."
   - Bouton : `btn btn-outline btn-primary` "Lire la suite"

3. **Partenariat éco-responsable**
   - Badge : `badge badge-success` "01 Fév 2026"
   - Titre : "ShopStyle s'engage pour une mode durable"
   - Résumé : "Nouveau partenariat avec des fournisseurs certifiés GOTS. Objectif : 80% de notre collection éco-responsable d'ici 2027."
   - Bouton : `btn btn-outline btn-primary` "Lire la suite"

4. **Résultats annuels 2025**
   - Badge : `badge badge-primary` "15 Jan 2026"
   - Titre : "ShopStyle affiche une croissance de 25% en 2025"
   - Résumé : "Une année record avec plus de 500 000 clients satisfaits et un chiffre d'affaires en forte progression."
   - Bouton : `btn btn-outline btn-primary` "Lire la suite"

5. **Application mobile**
   - Badge : `badge badge-info` "10 Déc 2025"
   - Titre : "Lancement de l'application mobile ShopStyle"
   - Résumé : "Téléchargez notre nouvelle application pour une expérience shopping optimisée sur mobile. Disponible sur iOS et Android."
   - Bouton : `btn btn-outline btn-primary` "Lire la suite"

**Section Contact Presse**
- Card avec informations de contact
- Composant : `card bg-primary text-primary-content`

**Contenu** :
```
Titre : "Contact Presse"
Nom : Marie Martin
Email : presse@shopstyle.fr
Téléphone : 01 23 45 67 89
Description : "Pour toute demande d'information ou interview"
```

**Composants DaisyUI utilisés** :
- `card`, `card-body`, `card-title`, `card-actions`
- `badge` pour les dates
- `btn btn-outline btn-primary` pour les boutons
- `card bg-primary text-primary-content` pour la card contact
- `divider` entre les communiqués

---

## Thème et couleurs

### Palette de couleurs
- **Primary** : Bleu (DaisyUI default)
- **Secondary** : Violet (DaisyUI default)
- **Accent** : Rose/Orange pour certains éléments
- **Success** : Vert pour les badges "Nouveau"
- **Error** : Rouge pour les soldes
- **Info** : Bleu clair pour les alertes informatives

### Gradients
- Hero sections : `bg-gradient-to-r from-primary to-secondary`
- Cards catégories : Gradients personnalisés selon le thème

## Responsive Design

### Breakpoints
- **Mobile** : < 768px (1 colonne)
- **Tablet** : 768px - 1024px (2 colonnes)
- **Desktop** : > 1024px (3-4 colonnes selon le contenu)

### Classes Tailwind
- `grid-cols-1` : Mobile
- `md:grid-cols-2` : Tablet
- `lg:grid-cols-3` ou `lg:grid-cols-4` : Desktop

## Accessibilité

### Bonnes pratiques
- Utiliser des balises sémantiques (nav, main, footer, article)
- Attributs `alt` pour les images
- Contraste suffisant pour le texte
- Navigation au clavier fonctionnelle
- Labels pour les formulaires

## Performance

### Optimisations
- Utilisation des CDN pour DaisyUI et Tailwind
- Pas d'images lourdes (utilisation de gradients CSS)
- Structure HTML légère
- Lazy loading pour les images si nécessaire

## Validation

### Checklist avant livraison
- [ ] HTML valide (W3C)
- [ ] Responsive sur mobile/tablet/desktop
- [ ] Tous les liens fonctionnels
- [ ] Navbar et footer identiques sur toutes les pages
- [ ] Gradients et couleurs cohérents
- [ ] Composants DaisyUI correctement utilisés
- [ ] Texte en français sans fautes
- [ ] Accessibilité de base respectée

## Notes d'implémentation

### Ordre de création recommandé
1. mentions-legales.html (plus simple, beaucoup de texte)
2. plan-site.html (structure simple avec listes)
3. magasins.html (cards répétitives)
4. carrieres.html (mix de contenu)
5. presse.html (plus complexe avec dates et badges)

### Réutilisation de code
- Copier la navbar et le footer depuis une page existante (ex: a-propos.html)
- Adapter uniquement le hero et le contenu principal
- Garder la même structure de classes CSS

### Tests
- Tester chaque page sur Chrome, Firefox, Safari
- Vérifier la responsivité avec les DevTools
- Valider tous les liens internes
- Vérifier l'orthographe française
