const db = require('../data/db-config.js');

module.exports = {
  find,
  findById
};

function find() {
  console.log('find triggered');
  return db('schemes');
}

function findById(id) {}
