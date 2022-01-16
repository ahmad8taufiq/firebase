const db = require('../config')

const docRef = db.collection('users').doc('KcazbrjWYOMZuf9OnkAR');

docRef.set({
  firstName: 'Abdullah',
  lastName: 'Faqih',
}).then(result => {
  console.log(result)
}).catch(err => {
  console.log(err)
})