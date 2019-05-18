// Below controllers allow the user to view all, create new, edit, or remove Doctors
const ObjectId = require("mongoose").Types.ObjectId
const db = require("../models")

module.exports = {
  //find all Doctor from a certain user
  findAll: function(req, res) {
    console.log("Hitting findAll Doctors")
    if (req.user) {
      db.Doctor
        .find({ UserID: req.user._id }).sort({ Date: -1 })
        .then(doctors => {
          console.log(doctors)
          res.json({ allDoctors: doctors });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ nothing });
    }
  },
  
  // Add a new Doctor
  addDoctor: function(req, res) {
    console.log("Hitting addDoctor")
    console.log(req.body)
    let doctor = req.body
    db.Doctor
      .findOneAndUpdate({ UserID: req.user._id}, doctor, { upsert: true }, function(){})
      .then(dbDoctor => {
        console.log(dbDoctor)
        res.json(dbDoctor);
      })
      .catch(err => res.status(422).json(err));
  },
  
  // To remove a previous Doctor, Lesley HALP
  // Finish l8r
  // remove: function(req, res) {
  //   db.Doctor.findOneAndDelete({ UserID: req.user._id, name: r }, { $pull: { entry: new ObjectId(req.params.id) } }, { new: true })
  //     .then(() => {
  //       db.Doctor
  //         .findOneAndDelete({ _id: req.params.id })
  //         .then(dbEntry => res.json(dbBook))
  //         .catch(err => res.status(422).json(err));
  //     });
  // }
};