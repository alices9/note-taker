const router = require('express').Router();
const htmlRoutes = require("./htmlRoutes.js");
const apiRoutes = require("./apiRoutes.js");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;