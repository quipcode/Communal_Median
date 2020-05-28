var express = require('express');
var router = express.Router();

const User = require('../models/users')

router.get("/",(req,res) =>{
  User.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

module.exports = router;
