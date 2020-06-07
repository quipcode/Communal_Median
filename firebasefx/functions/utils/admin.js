const admin = require('firebase-admin')
const config = require('./fbConfig')

admin.initializeApp({
    credential: admin.credential.cert(require('../key/admin.json')),
    storageBucket: config.storageBucket
})

const db = admin.firestore();

module.exports = {admin, db}