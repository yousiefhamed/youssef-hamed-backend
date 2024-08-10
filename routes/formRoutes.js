const express = require("express");
const { submitForm } = require("./../controllers/formControllers");

const router = express.Router();

router.post("/", submitForm);

module.exports = router;
