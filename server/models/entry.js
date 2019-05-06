// -----------New Dadirri Schema---------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  mood: { type: Number, required: true },
  energy: { type: Number, required: true },
  anxiety: { type: Number, required: true },
  medicationTaken: { type: Boolean, required: true },
  dailyLog: String,
  sleepHours: Number,
  exercise: { type: Boolean, required: true },
  exerciseAmount: String,
  date: { type: Date, required: true, default: Date.now }
})

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;