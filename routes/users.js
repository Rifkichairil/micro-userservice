const express = require('express');
const router = express.Router();
const usersHandlers = require('./handler/users')

/* GET users listing. */
router.post('/register', usersHandlers.register)
router.post('/login', usersHandlers.login)
router.put('/:id', usersHandlers.update)
router.get('/:id', usersHandlers.getUser)
router.get('/', usersHandlers.getUsers)
router.post('/logout', usersHandlers.logout)

module.exports = router;
