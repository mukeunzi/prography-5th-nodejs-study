const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('../db/data.json');
const db = low(adapter);

db.defaults({ users: [], books: [] }).write();

module.exports = db;
