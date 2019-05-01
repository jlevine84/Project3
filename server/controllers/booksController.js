// Update Control to Dadirri needs

const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");



// -----------BOOKS SCRIPT FOR REFERENCE. DADIRRI SCRIPT BELOW----------------------------------------------------------
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate({ path: "books", options: { sort: { 'date': -1 } } })
        .then(users => {
          res.json({ books: users[0].books });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ books: null });
    }
  },
  findById: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate("books")
        .then(users => {
          const book = users[0].books.filter(b => b._id.toString() === req.params.id);
          res.json({ book: book[0] });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ book: null });
    }
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbBook => {
        return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { books: dbBook._id } }, { new: true });
      })
      .then((dbUser) => {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { books: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Book
          .findOneAndDelete({ _id: req.params.id })
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      });
  }
};

// ------------------DADIRRI SCRIPT-------------------------------------------------------------

// Below controllers allow the user to retrieve by ID, create new, edit, or remove mood entries

// module.exports = {

//   // To find a specific mood entry by ID
//   // no idea what's going on with the "then" statement
//   findById: function(req, res) {
//         if (req.entry) {
//           db.Entry
//             .find({ _id: req.entry._id })
//             .populate("???")
//             .then(users => {
//               const book = users[0].books.filter(b => b._id.toString() === req.params.id);
//               res.json({ book: book[0] });
//             })
//             .catch(err => res.status(422).json(err));
//         } else {
//           return res.json({ book: null });
//         }
//       },
  
//   // To create a new mood entry using the entry schema
//   createEntry: function(req, res) {
//       db.Entry
//         .create(req.body)
//         .then(dbEntry => {
//           return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { entry: dbEntry._id } }, { new: true });
//         })
//         .then((dbUser) => {
//           // If the User was updated successfully, send it back to the client
//           res.json(dbUser);
//         })
//         .catch(err => res.status(422).json(err));
//     },
  
//   // To edit an existing mood entry
//     update: function(req, res) {
//       db.Entry
//         .findOneAndUpdate({ _id: req.params.id }, req.body)
//         .then(dbModel => {
//           console.log(dbModel);
//           res.json(dbModel);
//         })
//         .catch(err => res.status(422).json(err));
//     },
  
//   // To remove a previously created mood entry
//     remove: function(req, res) {
//       db.Entry.findOneAndUpdate({ _id: req.user._id }, { $pull: { entry: new ObjectId(req.params.id) } }, { new: true })
//         .then(() => {
//           db.Entry
//             .findOneAndDelete({ _id: req.params.id })
//             .then(dbEntry => res.json(dbBook))
//             .catch(err => res.status(422).json(err));
//         });
//     }
//   };
  
