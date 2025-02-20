const express = require("express");
const { calculateTax, saveCalculation, getCalculations } = require("../controllers/taxController");

const router = express.Router();

router.post("/calculate", calculateTax);
router.post("/save", saveCalculation);
router.get("/history", getCalculations);

module.exports = router;