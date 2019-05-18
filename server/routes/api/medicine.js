const router = require("express").Router();
const medicineController = require('./../../controllers/medicineController');

// /api/medicine/create
router.route("/create")
  .post(medicineController.addMedicine);

// /api/medicine/view
router
.route("/view")
.get(medicineController.findAll)

module.exports = router;