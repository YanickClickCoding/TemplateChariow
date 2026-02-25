# ShopStyle - Template E-commerce avec DaisyUI

Site e-commerce moderne utilisant DaisyUI et Tailwind CSS avec header et footer intégrés dans chaque page.

## 🌿 Workflow Git

Ce projet utilise deux branches principales :

### Branches
- **`master`** : Branche de production stable
- **`modifications`** : Branche de développement pour toutes les modifications

### Workflow de développement

1. **Travailler sur la branche modifications** :
```bash
git checkout modifications
```

2. **Faire vos modifications** et les commiter :
```bash
git add .
git commit -m "Description de vos modifications"
```

3. **Pousser sur la branche modifications** :
```bash
git push origin modifications
```

4. **Quand les modifications sont prêtes**, fusionner dans master :
```bash
git checkout master
git merge modifications
git push origin master
```

5. **Retourner sur modifications** pour continuer le développement :
```bash
git checkout modifications
```

## 📋 Structure du projet

### Fichiers principaux

- `*.html` - Pages HTML du site (header et footer intégrés)
- `header.html` - Template du header (référence uniquement)
- `footer.html` - Template du footer (référence uniquement)
- `app.js` - JavaScript pour les interactions
- `styles.css` - Styles CSS personnalisés
- `.kiro/specs/` - Documentation et spécifications du projet

## 🚀 Technologies utilisées

- **DaisyUI** - Framework de composants UI
- **Tailwind CSS** - Framework CSS utility-first
- **Vanilla JavaScript** - Pour les interactions

## ✨ Fonctionnalités JavaScript

### Interactions e-commerce
- Toast notifications : Messages de confirmation
- Compteur panier animé : S'incrémente avec animation
- Boutons "Ajouter au panier" : Feedback visuel

### Animations
- Cards produits : Animation fade-in au scroll
- Smooth scroll : Navigation fluide vers les ancres
- Effet parallax : Sur l'image hero
- Navbar auto-hide : Se cache au scroll vers le bas

### Menu actif
Le lien du menu correspondant à la page actuelle est automatiquement mis en surbrillance

## 📝 Pages disponibles

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
- ✅ magasins.html - Nos magasins
- ✅ carrieres.html - Carrières
- ✅ presse.html - Espace presse
- ✅ plan-site.html - Plan du site

## 🎨 Personnalisation

### Modifier le header
Le header est maintenant intégré dans chaque page HTML. Pour modifier le header sur toutes les pages :
1. Éditez `header.html` avec vos modifications
2. Utilisez le script PowerShell pour appliquer les changements à toutes les pages

### Modifier le footer
Le footer est maintenant intégré dans chaque page HTML. Pour modifier le footer sur toutes les pages :
1. Éditez `footer.html` avec vos modifications
2. Utilisez le script PowerShell pour appliquer les changements à toutes les pages

### Thème DaisyUI
Le site utilise le thème "light" de DaisyUI. Pour changer de thème, modifiez l'attribut `data-theme` dans la balise `<html>` :

```html
<html lang="fr" data-theme="dark">
```

Thèmes disponibles : light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter

## 🔧 Développement local

Le site peut maintenant être ouvert directement dans le navigateur sans serveur local, car le header et footer sont intégrés dans chaque page.

Cependant, pour une meilleure expérience de développement, vous pouvez utiliser :

### Option 1 : VS Code Live Server
Installez l'extension "Live Server" et cliquez sur "Go Live"

### Option 2 : Python
```bash
python -m http.server 8000
```

### Option 3 : Node.js (http-server)
```bash
npx http-server
```

## 📦 Déploiement

Pour déployer le site :

1. Assurez-vous que toutes vos modifications sont sur la branche `master`
2. Poussez sur GitHub : `git push origin master`
3. Déployez sur votre hébergeur (GitHub Pages, Netlify, Vercel, etc.)

### GitHub Pages
1. Allez dans Settings > Pages
2. Sélectionnez la branche `master`
3. Cliquez sur Save

## 📄 Licence

Usage commercial autorisé

## 🆘 Support

Pour toute question ou problème :
- Documentation DaisyUI : https://daisyui.com/
- Documentation Tailwind CSS : https://tailwindcss.com/

---

**Auteur** : YanickClickCoding  
**Repository** : https://github.com/YanickClickCoding/TemplateChariow
