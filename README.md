# ShopStyle - Template E-commerce

## 📋 Structure du projet

Ce template utilise une architecture modulaire avec header et footer globaux pour faciliter la maintenance.

### Fichiers principaux

- `header.html` - Header global avec navbar et sous-menus
- `footer.html` - Footer global avec liens et réseaux sociaux
- `app.js` - JavaScript global pour toutes les pages
- `index.html` - Page d'accueil (et toutes les autres pages HTML)

## 🚀 Utilisation

### Structure HTML de base pour chaque page

Chaque page doit suivre cette structure :

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page - ShopStyle</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Header global -->
    <div id="header-placeholder"></div>

    <!-- Contenu de la page -->
    <main>
        <!-- Votre contenu ici -->
    </main>

    <!-- Footer global -->
    <div id="footer-placeholder"></div>

    <!-- JavaScript global -->
    <script src="app.js"></script>
</body>
</html>
```

## ✨ Fonctionnalités JavaScript

### Sous-menus au survol
Les sous-menus s'ouvrent automatiquement au survol sur desktop (≥1024px)

### Animations
- Cards produits : Animation fade-in au scroll
- Smooth scroll : Navigation fluide vers les ancres
- Effet parallax : Sur l'image hero
- Navbar auto-hide : Se cache au scroll vers le bas

### Interactions e-commerce
- Toast notifications : Messages de confirmation
- Compteur panier animé : S'incrémente avec animation
- Boutons "Ajouter au panier" : Feedback visuel

### Menu actif
Le lien du menu correspondant à la page actuelle est automatiquement mis en surbrillance

## 📝 Personnalisation

### Modifier le header
Éditez `header.html` pour modifier :
- Logo et nom du site
- Liens de navigation
- Sous-menus
- Icônes et badges

### Modifier le footer
Éditez `footer.html` pour modifier :
- Liens footer
- Réseaux sociaux
- Copyright

### Ajouter des fonctionnalités JavaScript
Éditez `app.js` pour ajouter de nouvelles fonctionnalités globales

## 🎨 Thème DaisyUI

Le site utilise le thème "light" de DaisyUI. Pour changer de thème, modifiez l'attribut `data-theme` dans la balise `<html>` :

```html
<html lang="fr" data-theme="dark">
```

Thèmes disponibles : light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter

## 📦 Pages incluses

- ✅ index.html - Page d'accueil
- ✅ femme.html - Collection femme
- ✅ homme.html - Collection homme
- ✅ enfants.html - Collection enfants
- ✅ accessoires.html - Accessoires
- ✅ nouveautes.html - Nouveautés
- ✅ soldes.html - Soldes
- ✅ panier.html - Panier
- ✅ favoris.html - Favoris
- ✅ compte.html - Compte utilisateur
- ✅ contact.html - Contact
- ✅ a-propos.html - À propos
- ✅ faq.html - FAQ
- ✅ livraison.html - Livraison
- ✅ retours.html - Retours
- ✅ cgv.html - CGV
- ✅ confidentialite.html - Confidentialité
- ✅ mentions-legales.html - Mentions légales

## 🔧 Développement local

Pour tester le site localement, vous devez utiliser un serveur local car les fichiers `header.html` et `footer.html` sont chargés via `fetch()`.

### Option 1 : Python
```bash
python -m http.server 8000
```

### Option 2 : Node.js (http-server)
```bash
npx http-server
```

### Option 3 : PHP
```bash
php -S localhost:8000
```

### Option 4 : VS Code Live Server
Installez l'extension "Live Server" et cliquez sur "Go Live"

Puis ouvrez : `http://localhost:8000`

## ⚠️ Important

- Ne pas ouvrir les fichiers HTML directement dans le navigateur (file://)
- Toujours utiliser un serveur local pour le développement
- Les sous-menus nécessitent JavaScript activé

## 📄 Licence

Usage commercial autorisé

## 🆘 Support

Pour toute question ou problème, consultez la documentation DaisyUI : https://daisyui.com/
