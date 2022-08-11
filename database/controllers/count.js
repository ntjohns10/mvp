const Visit = require('../models/visit.js');
const db = require('../index.js');


const countVisits = (req, callback) => {
  Visit.countDocuments(req.query)
  .then((count) => callback(null, count))
  .catch((err) => callback(err, null))
}

module.exports = countVisits;