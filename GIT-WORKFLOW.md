# 🌿 Workflow Git - Guide Rapide

## 📍 Vous êtes ici : Branche `modifications`

Toutes vos modifications doivent être faites sur cette branche avant d'être fusionnées dans `master`.

## 🔄 Workflow quotidien

### 1️⃣ Faire des modifications

```bash
# Vérifier sur quelle branche vous êtes
git branch

# Si vous n'êtes pas sur modifications, basculez dessus
git checkout modifications

# Faites vos modifications dans les fichiers...
```

### 2️⃣ Sauvegarder vos modifications (Commit)

```bash
# Voir les fichiers modifiés
git status

# Ajouter tous les fichiers modifiés
git add .

# OU ajouter des fichiers spécifiques
git add index.html header.html

# Créer un commit avec un message descriptif
git commit -m "feat: Ajout d'une nouvelle section sur la page d'accueil"
```

### 3️⃣ Envoyer sur GitHub

```bash
# Pousser vos modifications sur GitHub
git push origin modifications
```

## 🎯 Quand vos modifications sont prêtes pour la production

### Fusionner dans master

```bash
# 1. Aller sur la branche master
git checkout master

# 2. Récupérer les dernières modifications de GitHub
git pull origin master

# 3. Fusionner modifications dans master
git merge modifications

# 4. Pousser master sur GitHub
git push origin master

# 5. Retourner sur modifications pour continuer le travail
git checkout modifications
```

## 📝 Messages de commit recommandés

Utilisez des préfixes pour clarifier vos commits :

- `feat:` - Nouvelle fonctionnalité
  - Exemple : `feat: Ajout du système de filtres sur la page produits`

- `fix:` - Correction de bug
  - Exemple : `fix: Correction du menu mobile qui ne se fermait pas`

- `style:` - Modifications visuelles (CSS, design)
  - Exemple : `style: Amélioration du design des cards produits`

- `docs:` - Documentation
  - Exemple : `docs: Mise à jour du README`

- `refactor:` - Refactorisation du code
  - Exemple : `refactor: Simplification du code JavaScript`

- `chore:` - Tâches de maintenance
  - Exemple : `chore: Mise à jour des dépendances`

## 🆘 Commandes utiles

### Voir l'historique des commits
```bash
git log --oneline --graph
```

### Annuler des modifications non commitées
```bash
# Annuler les modifications d'un fichier
git checkout -- nom-du-fichier.html

# Annuler toutes les modifications
git checkout -- .
```

### Voir les différences avant de commiter
```bash
git diff
```

### Voir les branches
```bash
# Branches locales
git branch

# Toutes les branches (locales et distantes)
git branch -a
```

### Récupérer les dernières modifications de GitHub
```bash
git pull origin modifications
```

## ⚠️ Règles importantes

1. ✅ **TOUJOURS** travailler sur la branche `modifications`
2. ✅ **TOUJOURS** commiter avec des messages clairs
3. ✅ **TOUJOURS** pousser régulièrement sur GitHub (backup)
4. ❌ **NE JAMAIS** travailler directement sur `master`
5. ❌ **NE JAMAIS** forcer un push (`git push -f`)

## 🔗 Liens utiles

- **Dépôt GitHub** : https://github.com/YanickClickCoding/TemplateChariow
- **Branche modifications** : https://github.com/YanickClickCoding/TemplateChariow/tree/modifications
- **Branche master** : https://github.com/YanickClickCoding/TemplateChariow/tree/master

## 📊 État actuel

```
✅ Branche master : Version stable en production
✅ Branche modifications : Version de développement (VOUS ÊTES ICI)
✅ Synchronisé avec GitHub
```

---

**Bon développement ! 🚀**
