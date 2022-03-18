const Site = require("../model/siteSchema");


// Getting all
const getSites = async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Getting One
const getSite = (req, res) => {
  res.json(res.site);
};
// Creating one
const addSite = async (req, res) => {
  let data = JSON.parse(req.body.body)
  console.log(data)
  const newSite = new Site(data);
  newSite.basic.picture = req.file.path
  try {
    const site = await newSite.save();
    res.status(201).json(site);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Updating One
const updateSite = async (req, res) => {
  try {
    const updatedSite = await res.site.save();
    res.json(updatedSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Deleting One
const deleteSite = async (req, res) => {
  try {
    await res.site.remove();
    res.json({ message: "Deleted Sites" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

async function getSiteByID(req, res, next) {
  let site = null;
  try {
    site = await Site.findById(req.params.id);
    if (site == null) {
      return res.status(404).json({ message: "Cannot find site" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.site = site;
  next();
}

module.exports = {
  getSites,
  addSite,
  getSite,
  getSiteByID,
  deleteSite,
  updateSite,
};
