// ----------------DADIRRIS SCSRIPT------------------------------------------------------------

// "entries" api file does not exist yet to avoid causing app issues by renaming files in the existing structure. 
// can go back and adjust file names after more comfortable with code
const router = require("express").Router();
const entryController = require('./../../controllers/entryController');
// Matches with "/api/entry"
// Do we need a find all in this context? Would we ever need to retrieve more than one entry at a time?

// /api/entry/create
router.route("/create")
  .post(entryController.createEntry);

// Matches with "/api/entry/:id"
// router
//   .route("/:id")
//   .get(entryController.findById)
//   .put(entryController.update)
//   .delete(entryController.remove);

router.route("/").get(entryController.findByRange)

// /api/entry/view
router
.route("/view")
.get(entryController.findAll)

// /api/entry/:date
router
.route("/:date")
.get(entryController.findByDate)

module.exports = router;