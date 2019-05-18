// -----------New Dadirri Schema---------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  streetInfo: String,
  cityStateZip: String,
  Date: { type: Date, default: Date.now },
  UserID: {type: String, required: true }
})

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;