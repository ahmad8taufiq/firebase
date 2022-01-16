const admin = require("firebase-admin");
var serviceAccount = require("../fir-4853a-firebase-adminsdk-x9822-be51caeef7.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

module.exports = db