# Configuration GitHub - Instructions

## 📝 Étapes pour configurer le dépôt GitHub

### 1. Créer le dépôt sur GitHub

✅ **Dépôt déjà créé !** 
- URL : https://github.com/YanickClickCoding/TemplateChariow
- Les branches `master` et `modifications` ont été poussées avec succès

### 2. ~~Pousser le code local vers GitHub~~

✅ **Déjà fait !** Les deux branches sont maintenant sur GitHub.

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
- ✅ Branche `master` créée et poussée sur GitHub
- ✅ Branche `modifications` créée et poussée sur GitHub
- ✅ Remote `origin` configuré vers GitHub
- ✅ Dépôt GitHub créé : https://github.com/YanickClickCoding/TemplateChariow
- ✅ Vous êtes sur la branche `modifications` - prêt à travailler !

## 🎯 Vous pouvez maintenant commencer à travailler !

Vous êtes sur la branche `modifications`. Faites vos modifications et commitez-les :

```bash
# Faire vos modifications...

# Ajouter et commiter
git add .
git commit -m "Description de vos modifications"

# Pousser sur GitHub
git push origin modifications
```
