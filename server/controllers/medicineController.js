// Below controllers allow the user to view all, create new, edit, or remove Medicines
const ObjectId = require("mongoose").Types.ObjectId
const db = require("../models")

module.exports = {
  //find all Medicines from a certain user
  findAll: function(req, res) {
    if (req.user) {
      db.Medicine
        .find({UserID: req.user._id}).sort({ Date: -1 })
        .then(doctors => {
          res.json({allDoctors: doctors});
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({nothing});
    }
  },
  
  // Add a new Doctor, Lesley HALP
  addDoctor: function(req, res) {
  let medicine = req.body
    db.Medicine
      .findOneAndUpdate({UserID: req.user._id}, medicine, {upsert: true}, function(){})
      .then(dbEntry => {
        return db.User.findOneAndUpdate({ _id: dbEntry.UserID}, { $push: { entries: dbEntry._id } });
      })
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  
  // To edit an existing Medicine, Lesley HALP
  update: function(req, res) {
    db.Medicine
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  
  // To remove a previous Medicine, Lesley HALP
  remove: function(req, res) {
    db.Medicine.findOneAndUpdate({ _id: req.user._id }, { $pull: { entry: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Medicine
          .findOneAndDelete({ _id: req.params.id })
          .then(dbEntry => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      });
  }
};