const Site = require("../model/site.model");
 
class SiteController{
  constructor(){}

  async getSites(){
    try {
      const sites = await Site.find();
      return {ok:true, sites};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async getSite(id){
    try {
      const site = await Site.findById(id);
      return {ok:true, site};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async addSite(data, imagePath){
    try {
      data.image = imagePath;
      const newSite = new Site(data);5
      const site = await newSite.save();
      return {ok:true, site};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async updateSite(id,newData){
    try {
      const updatedSite = await Site.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true, site:updatedSite};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async deleteSite(id){
    try {
      await Site.findByIdAndDelete(id);
      return {ok:true, message: "Deleted Site" };
    } catch (err) {
      return {ok:false,error:err};
    }
  }

}

module.exports = new SiteController();