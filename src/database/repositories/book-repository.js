const BaseRepository = require('./base-repository');

class BookRepository extends BaseRepository {
	constructor() {
		super('books');
	}
}

module.exports = BookRepository;
