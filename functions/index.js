const admin = require('firebase-admin')
const functions = require('firebase-functions')

exports.addMessage = functions.https.onCall((data, context) => {
  return data
})
