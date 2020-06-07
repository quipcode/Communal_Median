const functions = require('firebase-functions');
const app = require('express')();

const FBAuth = require('./utils/fbAuth')
const {db} = require('./utils/admin')

const {getUsers, signUp} = require('./handlers/users')

app.get("/users", getUsers)
app.post('/user/signup', signUp )

exports.api = functions.https.onRequest(app)