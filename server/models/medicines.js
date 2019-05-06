// -----------New Dadirri Schema---------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  name: { type: String, required: true },
  taken: { type: Boolean, required: true },
  dose: Number,
  medicationFor: String,
  date: { type: Date, required: true, default: Date.now}
})

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;