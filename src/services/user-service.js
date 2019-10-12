const UserRepository = require('../database/repositories/user-repository');
const User = require('../models/user');

class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	create(user_id, user_password, user_auth) {
		const user = User.newInstance(user_id, user_password, user_auth);
		this.userRepository.create(user.toJSON());

		return user;
	}

	find() {
		const users = this.userRepository.find();
		return users.map(user => User.fromData(user));
	}

	findById(_id) {
		const user = this.userRepository.findById(_id);
		return User.fromData(user);
	}

	update(_id, data) {
		const user = User.fromData(this.userRepository.findById(_id));

		user.user_password = data.user_password || user.user_password;
		user.user_auth = data.user_auth || user.user_auth;
		user.rental_list = data.rental_list || user.rental_list;
		user.status_code = data.status_code || user.status_code;

		this.userRepository.update(_id, user.toJSON());
		return user;
	}

	delete(_id) {
		console.log(this.userRepository.delete(_id));
	}
}

module.exports = UserService;
