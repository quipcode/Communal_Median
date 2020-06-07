const firebase = require('firebase')

const {admin, db} = require("../utils/admin")
const config = require('../utils/fbConfig')

const {validateSignUpData} = require('../utils/validators')

firebase.initializeApp(config)

exports.getUsers = (req, res) => {
    db.collection(`users`)
        .get()
        .then((data)=> {
            let users = []
            data.forEach((doc) => {
                users.push({
                    userId: doc.id
                })
            });
            return res.json(users)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({error: err.code})
        })
}

exports.signUp = (req, res) => {
const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
}
const {errors, valid } = validateSignUpData(newUser)
let noImg = 'no-img.png'
if(!valid) return res.status(400).json(errors)

    db.doc(`/users/${newUser.email}`)
        .get()
        .then((doc)=> {
            if(doc.exists){
                return res.status(400).json({error: 'This email is already registered, please login or provide a different email'})
            }else{
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then((data) => {
            userId = data.user.uid
            return data.user.getIdToken()
        })
        .then((idToken) => {
            token = idToken
            const userCredential = {
                email: newUser.email,
                createdAt: new Date().toISOString(),
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${
                    config.storageBucket
                    }/o/${noImg}?alt=media`,
                    userId
            };
            return db.doc(`/users/${newUser.email}`).set(userCredential)
        })
        .then(() => {
            return res.status(201).json({token})
        })
        .catch((err) => {
            console.error(err)
            if (err.code === 'auth/email-already-in-use') {
                return res.status(400).json({ email: 'Email is already is use' });
            } else {
            return res
                .status(500)
                .json({ general: 'Something went wrong, please try again' });
            }
        })
}