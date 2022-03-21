const express = require("express");
const { json } = require("express/lib/response");
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

router.get("/",(req,res) =>{
  getSites()
  .then(sites => res.json(sites))
  .catch(err => res.status(500).json({ message: err.message }))
});

// Getting One
router.get("/:id", (req,res)=>{
  getSite(req).then(site =>res.status(200).json(site))
  .catch(err => res.status(500).json({ message: err.message}))
})

// Creating one
router.post("/",upload.single('image'),(req,res)=>{
  addSite(req)
  .then(result => res.status(201).json(result))
  .catch(err => res.status(400).json({ message: err.message}))
});

// Updating One
router.patch("/:id",upload.none(), (req,res)=>{
  updateSite(req)
  .then(result => res.json(result))
  .catch(err => res.status(400).json({ message: err.message}))
});

// Deleting One
router.delete("/:id", (req,res)=>{
  deleteSite(req)
  .then(result => res.json(result))
  .catch(err => res.status(500).json({ message: err.message }))
});
module.exports = router;
