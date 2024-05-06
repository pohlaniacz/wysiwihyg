![alt text](https://raw.githubusercontent.com/pohlaniacz/wysiwihyg/main/public/logo.png)
What You See Is What I Hope You Get is a project that will contain react components which can by used to build simple site.
Todo will be grown as project continues.

### How to start
```
### Project
npm install
npm start

### Locally (firestore emulators)
curl -sL https://firebase.tools | bash
### If Java missing
## Ubuntu
sudo apt install default-jre
## MacOs
# Download and run https://www.oracle.com/java/technologies/downloads/#jdk22-mac [ARM64 DMG Installer]
firebase emulators:start --only firestore

### Production
# Provide credentials for Firestore based on .env.dist and save as .env
```

### Demo [![Netlify Status](https://api.netlify.com/api/v1/badges/9894d085-fc24-496f-bda5-8f3d1c315cb8/deploy-status)](https://app.netlify.com/sites/wysiwihyg/deploys)
https://wysiwihyg.netlify.app

### Todo
- [ ] Block with counting
- [ ] Better demo/placeholders
- [ ] Return saved form to firestore (bug?)
- [ ] Welcome modal
- [ ] Translations
- [ ] Tests

### Done ✓

- [x] Think about basic layout for components
- [x] First component
- [x] Write some stuff to Readme.md and keep `x` for future task check ;)
- [x] Old css cleanup and switch to tailwind (for buttons etc)
- [x] Modal with basic form to edit at least one block
- [x] Header component form
  - [x] Edit text
  - [x] Font select for header
  - [x] Image upload as a background
- [x] Two columns component, with two headers, pictures and paragraph
  - [x] Fix modal savings
- [x] Make component (?) for font stuff
- [x] Allow multiline text
- [x] Firestore + local firestore
