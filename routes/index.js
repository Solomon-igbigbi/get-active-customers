const router = require("express").Router();
const multer = require("multer")({ dest: "uploads/" });

const solutionController = require("../controllers/solution.controller");

router.post("/analyze", multer.single("file"), solutionController.analyze);

module.exports = router;
