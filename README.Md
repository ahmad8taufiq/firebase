## Setup
npm i -g firebase-tools

## Login | Logout
firebase login | logout

## Firebase Init
firebase init

## Emulator Init
firebase init emulators

## Emulator Start
firebase emulators:start

## Deploy All Function
firebase deploy --only functions

## Deploy Spesific Function
firebase deploy --only functions:helloWorld

## Deploy Other Feature (such as database)
firebase deploy --except functions