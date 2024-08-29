const express = require("express");
const router = express.Router();
const fileDataController = require("../controller/fileController")

// Get All
router.get("/", fileDataController.getAllData);

// Get by ID
router.get("/:postid", fileDataController.getDataById);

// Add Data
router.post("/", fileDataController.addNewData);

// Update Data
router.put("/:postid", fileDataController.updateData);

// Delete Data
router.delete("/:postid", fileDataController.deleteData);

module.exports = router;