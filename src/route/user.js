const express = require('express');

const {addUser, fetchUsers} = require('../controller/user')

const router = express.Router();

router.get('/', fetchUsers)

router.post('/', addUser)

module.exports = router;