## Setup
- Dependency: npm i -g firebase-tools
- Auth: firebase login | logout
- Init: firebase init
- Emulator Init: firebase init emulators
- Emulator Start: firebase emulators:start

## Deploy
- All Function: firebase deploy --only functions
- Specific Function: firebase deploy --only functions:helloWorld
- Other Feature (such as database): firebase deploy --except functions