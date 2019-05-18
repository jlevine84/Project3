// Below controllers allow the user to view all, create new, edit, or remove Medicines
const ObjectId = require("mongoose").Types.ObjectId
const db = require("../models")

module.exports = {
  //find all Medicines from a certain user
  findAll: function(req, res) {
    console.log("Hitting findAll Medicines")
    if (req.user) {
      db.Medicine
        .find({ UserID: req.user._id }).sort({ Date: -1 })
        .then(medicines => {
          console.log(medicines)
          res.json({ allMedicines: medicines });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({nothing});
    }
  },
  
  // Add a new Medicine, Lesley HALP
  addMedicine: function(req, res) {
    console.log("Hitting addMedicine")
    let medicine = req.body
    db.Medicine
      .findOneAndUpdate({ UserID: req.user._id}, medicine, { upsert: true }, function(){})
      .then(dbMedicine => {
        console.log(dbMedicine)
        res.json(dbMedicine);
      })
      .catch(err => res.status(422).json(err));
  },
  
  // To remove a previous Medicine, Lesley HALP
  // Finish l8r
  // remove: function(req, res) {
  //   db.Medicine.findOneAndDelete({ UserID: req.user._id, name: r }, { $pull: { entry: new ObjectId(req.params.id) } }, { new: true })
  //     .then(() => {
  //       db.Medicine
  //         .findOneAndDelete({ _id: req.params.id })
  //         .then(dbEntry => res.json(dbBook))
  //         .catch(err => res.status(422).json(err));
  //     });
  // }
};