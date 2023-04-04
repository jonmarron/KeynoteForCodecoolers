const mongoose = require('mongoose');
const { Schema, model } = mongoose.Schema;

const KeynoteTemplateSchema = new Schema({
    name: String,
    date: Date,
    slides: Array
});

const KeynoteTemplate = model('KeynoteTemplate', KeynoteTemplateSchema);

export default KeynoteTemplate;

