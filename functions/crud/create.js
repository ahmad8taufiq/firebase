const db = require('../config')

// const docRef = db.collection('users').doc('KcazbrjWYOMZuf9OnkAR');

// Using set
// docRef.set({
//   firstName: 'Ahmad',
//   lastName: 'Taufiq',
// }).then(result => {
//   console.log(result)
// }).catch(err => {
//   console.log(err)
// })

// Using add
db.collection("users").add({
  firstName: "Ahmad",
  lastName: "Taufiq"
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});