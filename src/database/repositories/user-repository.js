const BaseRepository = require('./base-repository');

class UserRepository extends BaseRepository {
	constructor() {
		super('users');
	}
}

module.exports = UserRepository;
