const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps
};

function find() {
  console.log('find triggered');
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    })
    .catch(err => null);
}

function findSteps(id) {
  console.log(id);
  return db('schemes')
    .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
    .where({ 'schemes.id': id })
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions');
}

/*SELECT scheme_name, step_number, instructions
FROM schemes
INNER JOIN steps on schemes.id = steps.id
WHERE schemes.id = 2 */
