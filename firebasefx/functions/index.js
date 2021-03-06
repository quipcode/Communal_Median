const functions = require('firebase-functions');
const app = require('express')();

const FBAuthLogin = require('./utils/fbAuthLogin')
const {db} = require('./utils/admin')

const {getUsers, signUpUser, loginUser, updateMyUserDetails} = require('./handlers/users')

app.get("/users", getUsers)
app.post('/user/signup', signUpUser )
app.post('/user/login', loginUser)
app.post('/user', FBAuthLogin,  updateMyUserDetails)

exports.api = functions.https.onRequest(app)