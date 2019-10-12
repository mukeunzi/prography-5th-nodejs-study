const BookRepository = require('../database/repositories/book-repository');
const Book = require('../models/book');

class BookService {
	constructor() {
		this.bookRepository = new BookRepository();
	}

	create(book_title, book_author, book_inventory) {
		const book = Book.newInstance(book_title, book_author, book_inventory);
		this.bookRepository.create(book.toJSON());

		return book;
	}

	find() {
		const books = this.bookRepository.find();
		return books.map(book => Book.fromData(book));
	}

	findById(_id) {
		const book = this.bookRepository.findById(_id);
		return Book.fromData(book);
	}

	update(_id, data) {
		const book = Book.fromData(this.bookRepository.findById(_id));

		book.book_title = data.book_title || book.book_title;
		book.book_author = data.book_author || book.book_author;
		book.book_inventory = data.book_inventory || book.book_inventory;
		book.rental_list = data.rental_list || book.rental_list;

		this.bookRepository.update(_id, book.toJSON());
		return book;
	}

	delete(_id) {
		console.log(this.bookRepository.delete(_id));
	}
}

module.exports = BookService;
