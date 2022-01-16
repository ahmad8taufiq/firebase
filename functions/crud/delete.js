const db = require('../config')

db.collection('users').doc('KcazbrjWYOMZuf9OnkAR').delete()
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error)
})