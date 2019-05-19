const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  name: { type: String, required: true },
  dose: String,
  medicationFor: String,
  logged: { type: Boolean, required: true },
  Date: { type: Date, default: Date.now },
  UserID: { type: String, required: true }
})

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;