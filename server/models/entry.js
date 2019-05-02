// -----------New Dadirri Schema---------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  date: { type: Date, required: true, default: Date.now},
  // user: {type: String, required: true},
  mood: {type: Number, required: true},
  energy: {type: Number, required: true},
  anxiety: {type: Number, required: true},
})

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;