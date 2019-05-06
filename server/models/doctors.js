// -----------New Dadirri Schema---------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: { type: String, required: true},
  phoneNumber: { type: Number, required: true },
  email: String,
  address: String
})

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;