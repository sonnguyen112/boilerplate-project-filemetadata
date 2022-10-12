const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController") 

router.use("/fileanalyse", apiController.fileanalyse)

module.exports = router