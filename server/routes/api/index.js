const router = require("express").Router();
const entryRoutes = require("./entry");
const doctorRoutes = require("./doctor");
const medicineRoute = require("./medicine")

// Entry routes
router.use("/entry", entryRoutes);

// Doctor routes
router.use("/doctor", doctorRoutes)

// Medicine routes
router.use("/medication", medicineRoute)

module.exports = router;
