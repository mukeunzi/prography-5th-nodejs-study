const BookService = require('../services/book-service');

const createBook = (req, res) => {
	const bookService = new BookService();

	const book = bookService.create(req.body.book_title, req.body.book_author, req.body.book_inventory);
	res.send({
		data: book.toJSON()
	});
};

const getBooks = (req, res) => {
	const bookService = new BookService();

	const books = bookService.find();
	res.send({ data: books });
};

const getBook = (req, res) => {
	const bookService = new BookService();

	const book = bookService.findById(req.params.book);
	res.send({ data: book });
};

const updateBook = (req, res) => {
	const bookService = new BookService();

	const payload = {
		book_title: req.body.book_title,
		book_author: req.body.book_author,
		book_inventory: req.body.book_inventory,
		rental_list: req.body.rental_list
	};
	const book = bookService.update(req.params.book, payload);
	res.send({ data: book });
};

const deleteBook = (req, res) => {
	const bookService = new BookService();

	bookService.delete(req.params.book);
	res.send({ data: 'success' });
};

module.exports = {
	createBook,
	getBooks,
	getBook,
	updateBook,
	deleteBook
};
