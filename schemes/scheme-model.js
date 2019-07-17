const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update
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
  return db('schemes')
    .innerJoin('steps', 'schemes.id', 'steps.scheme_id')
    .where({ 'schemes.id': id })
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions');
}

async function add(scheme) {
  const id = await db('schemes').insert(scheme);

  return findById(id);
}

async function update(updatedScheme, id) {
  await db('schemes')
    .where({ id })
    .update(updatedScheme);

  return findById(id);
}
