const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const {
  getSites,
  addSite,
  getSite,
  getSiteByID,
  deleteSite,
  updateSite,
} = require("../controller/siteController");

router.get("/", getSites);

// Getting One
router.get("/:id", getSiteByID, getSite);

// Creating one
router.post("/",upload.single('image'), addSite);

// Updating One
router.patch("/:id", getSiteByID, updateSite);

// Deleting One
router.delete("/:id", getSiteByID, deleteSite);

module.exports = router;
