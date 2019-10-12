const { Router } = require('express');
const BookController = require('../controllers/book-controller');

const router = Router();

router.get('', BookController.getBooks);
router.get('/:book', BookController.getBook);
router.post('', BookController.createBook);
router.put('/:book', BookController.updateBook);
router.delete('/:book', BookController.deleteBook);

module.exports = router;
