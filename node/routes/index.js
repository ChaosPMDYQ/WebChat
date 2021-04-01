var express = require('express')
var router = express.Router()

const login = require('../views/login')
const register = require('../views/register')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/login', login)
      .post('/register', register)

module.exports = router
