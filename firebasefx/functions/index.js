const functions = require('firebase-functions');
const app = require('express')();

const FBAuth = require('./utils/fbAuth')
const {db} = require('./utils/admin')

const {getUsers} = require('./handlers/users')

app.get("/users", getUsers)

exports.api = functions.https.onRequest(app)