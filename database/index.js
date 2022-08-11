const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/banhmi');

const db = mongoose.connection;

db.once('open', () => {
  console.log('mongoose connected')
})


module.exports = db;