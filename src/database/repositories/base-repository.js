const connector = require('../connector');

class BaseRepository {
	constructor(columnName) {
		this.columnName = columnName;
		this.models = connector.get(this.columnName);
	}

	create(data) {
		return this.models.push(data).write();
	}

	find() {
		return this.models.value();
	}

	findById(_id) {
		return this.models.find({ _id }).value();
	}

	update(_id, data) {
		return this.models
			.find({ _id })
			.assign(data)
			.write();
	}

	delete(_id) {
		return this.models.remove({ _id }).write();
	}
}

module.exports = BaseRepository;
