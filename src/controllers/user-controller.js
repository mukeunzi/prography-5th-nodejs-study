const UserService = require('../services/user-service');

const createUser = (req, res) => {
	const userService = new UserService();

	const user = userService.create(req.body.user_id, req.body.user_password, req.body.user_auth);
	res.send({
		data: user.toJSON()
	});
};

const getUsers = (req, res) => {
	const userService = new UserService();

	const users = userService.find();
	res.send({ data: users });
};

const getUser = (req, res) => {
	const userService = new UserService();

	const user = userService.findById(req.params.user);
	res.send({ data: user });
};

const updateUser = (req, res) => {
	const userService = new UserService();

	const payload = {
		user_password: req.body.user_password,
		user_auth: req.body.user_auth,
		rental_list: req.body.rental_list,
		status_code: req.body.status_code
	};
	const user = userService.update(req.params.user, payload);
	res.send({ data: user });
};

const deleteUser = (req, res) => {
	const userService = new UserService();

	userService.delete(req.params.user);
	res.send({ data: 'success' });
};

module.exports = {
	createUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser
};
