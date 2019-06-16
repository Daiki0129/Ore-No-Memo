import firebase from 'firebase/app'
import 'firebase/firestore'

const config = require('../../functions/config.json')

if (!firebase.apps.length) {
  firebase.initializeApp(config.firebase)
}

const db = firebase.firestore()
const createMemo = async (memoData) => {
  var date = new Date()
  var unixTime = date.getTime()
  await db.collection('memo').doc(String(unixTime)).set({
    title: memoData.title,
    memo: memoData.memo,
  })
  .then(function() {
      console.log("Document successfully written!")
      return true
  })
  .catch(function(error) {
      console.error("Error writing document: ", error)
      return false
  })
}
const getMemo = async () => {
  const memos = []
  await db.collection('memo').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      memos.push(doc.data())
    })
  })
  return memos
}
const doc = async (collenction, doc) => {
  const snapshot = await db.collection(collenction).doc(doc).get()
  return snapshot.data()
}

const firestore = {
  doc:doc,
  createMemo:createMemo,
  getMemo:getMemo
}

export default firestore
