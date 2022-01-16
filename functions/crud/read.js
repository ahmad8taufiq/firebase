const db = require('../config')

db.collection('users').get()
.then(snapshot => {
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data())
  });
})