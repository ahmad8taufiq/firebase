const db = require('../config')

const data = db.collection('users').where("firstName", "==", "Ahmad").get()
.then(snapshot => {
  if(snapshot.empty) {
    console.log("No matching document")
    return
  }
  
  snapshot.forEach(doc => {
    console.log(doc.id, "=>", doc.data())
  })
})
.catch(error => {
  console.log(error)
})