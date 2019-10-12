const getUniqueId = require('../utils/unique-id');

class User {
	constructor(_id = getUniqueId(), user_id, user_password, user_auth = 'user', rental_list = [], status_code = 1) {
		this._id = _id;
		this.user_id = user_id;
		this.user_password = user_password;
		this.user_auth = user_auth;
		this.rental_list = rental_list;
		this.status_code = status_code;
	}

	static newInstance(user_id, user_password, user_auth) {
		return new User(user_id, user_password, user_auth);
	}

	static fromData(data) {
		return new User(data._id, data.user_id, data.user_password, data.user_auth, data.rental_list, data.status_code);
	}

	toJSON() {
		return {
			_id: this._id,
			user_id: this.user_id,
			user_auth: this.user_auth,
			rental_list: this.rental_list,
			status_code: this.status_code
		};
	}
}

module.exports = User;
