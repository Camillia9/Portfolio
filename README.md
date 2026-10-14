# Camillia Portfolio

**[Français](#français) · [English](#english)**

🔗 **Site :** [mansoufcamillia.vercel.app](https://mansoufcamillia.vercel.app)

---

## Français

Portfolio de **Camillia**, développeuse fullstack à l'École 42 Paris, en recherche d'alternance.

### Le concept

Le portfolio reprend l'interface d'un client **IRC**, inspirée de mon projet ft_irc :
chaque section est un channel (`#about`, `#skills`, `#contact`), et chaque projet a son propre channel,
avec son topic, sa stack et la liste des membres de l'équipe.

### Stack

- **React** + **Vite**
- **Tailwind CSS**
- **react-i18next** (français / anglais)
- **react-icons**

### Fonctionnalités

- Navigation par channels avec défilement page par page et fondu
- Mise en surbrillance automatique du channel en cours de lecture
- Site bilingue FR / EN
- Responsive : sidebar sur ordinateur, barre de channels sur mobile
- Contenu séparé du code : ajouter un projet ne demande que des données et des textes

### Lancer le projet en local

```bash
git clone git@github.com:Camillia9/Portfolio.git portfolio
cd portfolio
npm install
npm run dev
```

Le site est ensuite accessible sur `http://localhost:5173`.

### Structure

```
src/
├── components/   composants de l'interface (Sidebar, ProjectChannel...)
├── data/         données : channels, projets, compétences, liens
├── locales/      textes en français et en anglais
└── i18n.js       configuration des traductions
```

---

## English

Portfolio of **Camillia**, full-stack developer at École 42 Paris, looking for a work-study position.

### The concept

The portfolio is designed like an **IRC** client, inspired by my ft_irc project:
each section is a channel (`#about`, `#skills`, `#contact`), and each project has its own channel,
with its topic, its stack and the list of team members.

### Stack

- **React** + **Vite**
- **Tailwind CSS**
- **react-i18next** (French / English)
- **react-icons**

### Features

- Channel-based navigation with page-by-page scrolling and fade transitions
- Automatic highlighting of the channel currently being read
- Bilingual site, FR / EN
- Responsive: sidebar on desktop, channel bar on mobile
- Content separated from code: adding a project only requires data and text

### Run locally

```bash
git clone git@github.com:Camillia9/Portfolio.git portfolio
cd portfolio
npm install
npm run dev
```

The site is then available at `http://localhost:5173`.

### Structure

```
src/
├── components/   UI components (Sidebar, ProjectChannel...)
├── data/         data: channels, projects, skills, links
├── locales/      French and English texts
└── i18n.js       translation setup
```
