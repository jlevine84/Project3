// ----------------DADIRRIS SCSRIPT------------------------------------------------------------

// "entries" api file does not exist yet to avoid causing app issues by renaming files in the existing structure. 
// can go back and adjust file names after more comfortable with code

// Matches with "/api/entries"
// Do we need a find all in this context? Would we ever need to retrieve more than one entry at a time?
router.route("/")
  .get(booksController.findAll)
  .post(booksController.createEntry);

// Matches with "/api/entries/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.updateEntry)
  .delete(booksController.removeEntry);

module.exports = router;