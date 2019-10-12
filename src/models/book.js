class Book {
	constructor(_id = getUniqueId(), book_title, book_author, book_inventory, rental_list = []) {
		this._id = _id;
		this.book_title = book_title;
		this.book_author = book_author;
		this.book_inventory = book_inventory;
		this.rental_list = rental_list;
	}

	static newInstance(book_title, book_author, book_inventory) {
		return new Book(book_title, book_author, book_inventory);
	}

	static fromData(data) {
		return new Book(data._id, data.book_title, data.book_author, data.book_inventory, data.rental_list);
	}

	toJSON() {
		return {
			_id: this._id,
			book_title: this.book_title,
			book_author: this.book_author,
			book_inventory: this.book_inventory,
			rental_list: this.rental_list
		};
	}
}
