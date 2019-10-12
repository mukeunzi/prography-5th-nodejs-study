const { Router } = require('express');
const auth = require('../middlewares/auth');
const users = require('./users');

const router = Router();

// middleware
router.use(auth);

router.use('/users', users);

module.exports = router;
