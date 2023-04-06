require('dotenv').config();
const mongoose = require('mongoose');
const KeynoteTemplate = require('./model/KeynoteTemplate.js');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors( { origin: "http://localhost:5175" } ));
app.use(express.json());

const {MONGO_URL, PORT = 8989} = process.env;

mongoose.connect(MONGO_URL);

app.post('/api/keynotetemplates', (req, res) => {
  try {
    const name = req.body.presentationName;
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

app.get('/api/keynotetemplates',async (req, res) => {
  try {
    const keynoteTemplates = await KeynoteTemplate.find({});
    res.status(200).json(keynoteTemplates);
  }
  catch (err) {
    console.log(err);
  }
})

app.put('/api/keynotetemplates/:id', async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  try {
    const keynoteTemplate = await KeynoteTemplate.findById(req.params.id);
    keynoteTemplate.slides = req.body;
    keynoteTemplate.save();
    res.status(200).json(keynoteTemplate);
  }
  catch (err) {
    console.log(err);
  }
})

app.listen(PORT, '0.0.0.0', () => console.log(`App ist listening on http://0.0.0.0:${PORT}`))