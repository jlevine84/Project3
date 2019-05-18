const router = require("express").Router();
const doctorController = require('./../../controllers/doctorController');

// /api/doctor/create
router.route("/create")
  .post(doctorController.addDoctor);

// /api/doctor/view
router
.route("/view")
.get(doctorController.findAll)

module.exports = router;