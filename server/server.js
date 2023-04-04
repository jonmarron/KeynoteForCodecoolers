const mongoose = require('mongoose');
const KeynoteTemplate = require('./model/KeynoteTemplate.js');

const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

mongoose.connect("mongodb+srv://marianniedermayr:qe7SEeteVfH5wu0z@cluster0.ijxxe0y.mongodb.net/test?retryWrites=true&w=majority");

app.use(cors( { origin: "http://localhost:5173" } ));
app.use(express.json());

const PORT = 8989;

app.get('/api/formtypes', (req, res) => {
  const types = JSON.parse(fs.readFileSync('./FormsTypes.json', 'utf-8'));
  res.json(types);  
})

app.post('/api/keynotetemplates', (req, res) => {
  try {
    const name = req.body.name;
    const date = new Date();
    const slides = req.body.slides;
    const keynoteTemplate = new KeynoteTemplate({
      name,
      date,
      slides
    });
    keynoteTemplate.save();
    res.status(200).json(keynoteTemplate);
  }
  catch (err) {
    console.log(err);
  }
})

app.get('/api/keynotetemplates', (req, res) => {
  KeynoteTemplate.find({}, (err, keynoteTemplates) => {
    if (err) {
      console.log(err);
    }
    res.json(keynoteTemplates);
  });
})

app.listen(PORT, () => console.log(`App ist listening on http://localhost:${PORT}`))