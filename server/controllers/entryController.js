// ------------------DADIRRI SCRIPT-------------------------------------------------------------

// Below controllers allow the user to retrieve by ID, create new, edit, or remove mood entries
const ObjectId = require("mongoose").Types.ObjectId
const db = require("../models")

module.exports = {
  //find all entries from a certain user//
  findAll: function(req, res) {
    if (req.user) {
      console.log(req.user)
      db.User
        .findOne({ _id: req.user._id})
        .populate('entries')
        .then(logs => {
          
          res.json({logs});
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({nothing});
    }
  },
  // To find a specific mood entry by Date
  findByDate: function(req, res) {
    console.log("req.date:")
    console.log(req.date)
    console.log("Req.params.date:")
    console.log(req.params.date)
        if (req.params.date) {
          db.Entry
            .find({ Date: req.params.date})
            .then(entry => {
             console.log(entry)
              res.json({ todaysentry: entry });
            })
            .catch(err => res.status(422).json(err));
        } else {
          return res.json({ todaysentry: null });
        }
      },
  
  // To create a new mood entry using the entry schema
  createEntry: function(req, res) {
    console.log("hitting entry Controller")
    console.log(req.user._id)
    console.log(req.body)
    entry = req.body
      db.Entry
      .findOneAndUpdate({ _id: req.user._id }, entry, {upsert: true})
        .then(dbEntry => {
          console.log("hitting next step!")
          console.log(dbEntry._id)
          return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { entries: dbEntry._id } });
        })
        .then((dbUser) => {
          console.log("should have an entry!")
          console.log(dbUser)
          res.json(dbUser);
        })
        .catch(err => res.status(422).json(err));
    },
  
  // To edit an existing mood entry
    update: function(req, res) {
      db.Entry
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
  
  // To remove a previously created mood entry
    remove: function(req, res) {
      db.Entry.findOneAndUpdate({ _id: req.user._id }, { $pull: { entry: new ObjectId(req.params.id) } }, { new: true })
        .then(() => {
          db.Entry
            .findOneAndDelete({ _id: req.params.id })
            .then(dbEntry => res.json(dbBook))
            .catch(err => res.status(422).json(err));
        });
    }
  };
  
