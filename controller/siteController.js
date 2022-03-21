const Site = require("../model/siteSchema");

// Getting all
const getSites = async () => {
  try {
    const sites = await Site.find();
    return sites;
  } catch (err) {
    return err;
  }
};

// Getting One
const getSite = async (req) => {
  let site = null;
  try {
    site = await Site.findById(req.params.id);
    if (site == null) {
      return { message: "Cannot find site" };
    }
    return site;
  } catch (err) {
    return err;
  }
};

// Creating one
const addSite = async (req) => {
  let data = JSON.parse(req.body.meta);
  const newSite = new Site(data);
  newSite.basic.picture = req.file.path;
  try {
    const site = await newSite.save();
    return site;
  } catch (err) {
    return err;
  }
};

// Updating One
const updateSite = async (req) => {
  console.log(req.body.meta)
  try {
    const updatedSite = await Site.findByIdAndUpdate(req.params.id, req.body.meta,(err,res)=>{
      console.log("error.>>>>>>",err,  "response>>>>>>>",res)
    });
    return updatedSite;
  } catch (err) {
    return err;
  }
};

// Deleting One
const deleteSite = async (req) => {
  try {
    await Site.findByIdAndDelete(req.params.id);
    return { message: "Deleted Sites" };
  } catch (err) {
    return err;
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
