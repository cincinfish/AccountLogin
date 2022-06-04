const express = require('express')
const router = express.Router()
const users = require('../../models/users')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(user => {
    return user.email === email
  })
  if (!user) {
    return res.render('index', { errors: "Email is wrong." })
  }
  if (password !== user.password) {
    return res.render('index', { user, errors: "Please check your password." })
  }
  
})

module.exports = router