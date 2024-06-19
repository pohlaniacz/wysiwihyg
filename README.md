<div align="center">
    <img src="public/logo.png" alt="wysiwihyg logo">
</div>

What You See Is What I Hope You Get is a project that will contain react components which can by used to build simple site.
Todo will be grown as project continues.

### How to start
```shell
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
firebase init
firebase emulators:start --only firestore,storage,auth

### Production
# Provide credentials for Firestore based on .env.dist and save as .env
```

### Demo [![Netlify Status](https://api.netlify.com/api/v1/badges/9894d085-fc24-496f-bda5-8f3d1c315cb8/deploy-status)](https://app.netlify.com/sites/wysiwihyg/deploys)
https://wysiwihyg.netlify.app

### Todo
- [ ] Optimize image upload
- [ ] Sort off admin panel? Social login for administrate?
- [ ] Modal with input to paste user id received earlier
- [ ] Block with counting
- [ ] Better demo/placeholders
- [ ] Replace modal component with own component
- [ ] Translations
- [ ] Tests

### Done ✓
- [x] Remove block
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
- [x] Modal with choose and add block type
  - [x] Fix, probably id is not necessary
- [x] Return saved form to firestore
- [x] Move add button outside top menu
- [x] Font is not loaded when loaded (not edited from modal)
- [x] Upload image to storage in firebase instead of base64
- [x] Login/register with firebase