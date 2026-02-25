# Configuration GitHub - Instructions

## 📝 Étapes pour configurer le dépôt GitHub

### 1. Créer le dépôt sur GitHub

1. Allez sur https://github.com/YanickClickCoding
2. Cliquez sur le bouton **"New"** (ou **"+"** > **"New repository"**)
3. Remplissez les informations :
   - **Repository name** : `Template`
   - **Description** : "Template e-commerce moderne avec DaisyUI et Tailwind CSS"
   - **Visibility** : Public ou Private (selon votre choix)
   - ⚠️ **NE PAS** cocher "Add a README file"
   - ⚠️ **NE PAS** ajouter .gitignore
   - ⚠️ **NE PAS** choisir de licence
4. Cliquez sur **"Create repository"**

### 2. Pousser le code local vers GitHub

Une fois le dépôt créé sur GitHub, exécutez ces commandes dans votre terminal :

```bash
# Vérifier que vous êtes sur la branche master
git checkout master

# Pousser la branche master
git push -u origin master

# Pousser la branche modifications
git push -u origin modifications
```

### 3. Définir la branche par défaut (optionnel)

Si vous voulez que `modifications` soit la branche par défaut sur GitHub :

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings**
3. Dans la section **"Default branch"**, changez de `master` à `modifications`
4. Cliquez sur **"Update"** et confirmez

## 🔄 Workflow quotidien

### Travailler sur modifications

```bash
# S'assurer d'être sur la branche modifications
git checkout modifications

# Faire vos modifications...

# Ajouter et commiter
git add .
git commit -m "Description de vos modifications"

# Pousser sur GitHub
git push origin modifications
```

### Fusionner dans master quand c'est prêt

```bash
# Aller sur master
git checkout master

# Fusionner modifications dans master
git merge modifications

# Pousser master sur GitHub
git push origin master

# Retourner sur modifications
git checkout modifications
```

## 📊 Vérifier l'état actuel

```bash
# Voir sur quelle branche vous êtes
git branch

# Voir l'état des fichiers
git status

# Voir l'historique des commits
git log --oneline

# Voir les branches distantes
git branch -r
```

## 🆘 Commandes utiles

### Annuler des modifications non commitées
```bash
git checkout -- <fichier>
```

### Voir les différences
```bash
git diff
```

### Créer une nouvelle branche
```bash
git checkout -b nom-de-la-branche
```

### Supprimer une branche locale
```bash
git branch -d nom-de-la-branche
```

## ✅ État actuel de votre projet

- ✅ Git initialisé
- ✅ Branche `master` créée avec le commit initial
- ✅ Branche `modifications` créée
- ✅ Remote `origin` configuré vers GitHub
- ⏳ En attente : Création du dépôt sur GitHub
- ⏳ En attente : Push des branches vers GitHub

## 🎯 Prochaines étapes

1. Créer le dépôt sur GitHub (voir étape 1 ci-dessus)
2. Pousser les branches (voir étape 2 ci-dessus)
3. Commencer à travailler sur la branche `modifications`

---

**Note** : Vous êtes actuellement sur la branche `modifications`. C'est parfait pour commencer à travailler !
