const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const KeynoteTemplateSchema = new Schema({
    name: String,
    date: Date,
    slides: Array
});

const KeynoteTemplate = model('KeynoteTemplate', KeynoteTemplateSchema);

module.exports = KeynoteTemplate;

