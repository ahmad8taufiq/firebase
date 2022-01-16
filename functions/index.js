const functions = require("firebase-functions")
const axios = require('axios')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// Function Start
exports.helloWorld = functions.https.onRequest((req, res) => {
  // functions.logger.info("Hello logs!", {structuredData: true})
  functions.logger.info("Hello logs!")
  res.send("Hello from Firebase!")
})

exports.api = functions.https.onRequest(async (req, res) => {
  switch(req.method) {
    case 'GET':
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      res.send(response.data)
      break
    case 'POST':
      const body = req.body ? req.body : {}
      res.send(body)
      break
    case 'DELETE':
      res.send(`it was ${req.method} request`)
      break
    default:
      res.send(`it was default request`)
  }
})
// Function Start
        
// Authentication Start
exports.userAdded = functions.auth.user().onCreate(user => {
  console.log(`${user.email} is created`)
  return Promise.resolve()
})

exports.userDeleted = functions.auth.user().onDelete(user => {
  console.log(`${user.email} is deleted`)
  return Promise.resolve()
})
// Authentication End

// Firestore Start
exports.fruitAdded = functions.firestore
.document('/fruits/{documentID}')
.onCreate((snapshot, context) => {
  console.log(snapshot.data())
  return Promise.resolve()
})

exports.fruitUpdated = functions.firestore
.document('/fruits/{documentID}')
.onUpdate((snapshot, context) => {
  console.log('Before', snapshot.before.data())
  console.log('After', snapshot.after.data())
  return Promise.resolve()
})

exports.fruitDeleted = functions.firestore
.document('/fruits/{documentID}')
.onDelete((snapshot, context) => {
  console.log(snapshot.data(), 'deleted')
  return Promise.resolve()
})
// Firestore End

// Schedule Function Start
// crontab.guru/every-minute
exports.scheduledFunction = functions.pubsub
.schedule('* * * * *')
.onRun(context => {
  console.log('I am running/executing every minute')
  return null
})
// Schedule Function End