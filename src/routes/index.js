const { Router } = require('express');
const auth = require('../middlewares/auth');
const users = require('./users');
const books = require('./books');

const router = Router();

// middleware
router.use(auth);

router.use('/users', users);
router.use('/books', books);

module.exports = router;
