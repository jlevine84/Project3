// Update Schema to Dadirri needs

// ---------- Books Schema for reference------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// -----------New Dadirri Schema---------------------------------
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const entrySchema = new Schema({
//   date: { type: Date, required: true},
//   user: {type: String, required: true},
//   mood: {type: numeric, required: true},
//   energy: {type: numeric, required: true},
//   anxiety: {type: numeric, required: true},
// })

// const Entry = mongoose.model("Entry", entrySChema);

// module.exports = Entry;