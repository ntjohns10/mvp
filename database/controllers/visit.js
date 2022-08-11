const Visit = require('../models/visit.js');
const db = require('../index.js');

const addVisit = (req, callback) => {
  Visit.insertMany(req.body)
  .then((docs)=> {callback(null, docs)})
  .catch((err)=> {callback(err, null)})
}




module.exports = addVisit;

