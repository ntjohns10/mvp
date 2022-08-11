const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const addVisit = require('../database/controllers/visit.js');
const countVisits = require('../database/controllers/count.js')
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.post('/visit', (req, res) => {
  console.log(req.body)
  addVisit(req, (err, docs) => {
    if (err) {
      console.log(err)
      res.status(400).end();
    } else {
      console.log(docs, 'saved successfully')
      res.status(203).end(JSON.stringify(docs))
    }
  })
})

app.get('/count', (req, res) => {
  console.log(req.query)
  countVisits(req, (err, docs) => {
    if(err) {
      console.log(err)
      res.status(400).end();
    } else {
      console.log(docs)
      res.status(200).end(JSON.stringify(docs))
    }
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});