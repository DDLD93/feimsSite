const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conditionArr=["Working", "Not Working", "Repairable","Obsolete","Abandoned"];
const damageArr=[0,25,50,75,100];

const siteSchema = new Schema({
  basic: {
    name: { type: String ,required: true },
    code: { type: String,unique:true,index:true},
    address: { type: String,required: true },
    area: { type: Number,required: true },
    state: { type: String,required: true },
    lga: { type: String,required: true },
    position: {
      longitude: { type: Number },
      latitude: { type: Number },
    },required: true
  },
  gate: {
    size: { type: Number,required: true },
    thickness: { type: String,required: true },
    cost: {
      type: Number,default:0
    },
    damage: {
      type: Number,
      enum: damageArr,
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  fence: {
    height: { type: Number },
    perimeter: { type: Number },
    concreteWork: { type: Number },
    blockWork: { type: Number},
    formWork: { type: Number },
    reinforcement: { type: Number },
    rendering: { type: Number },
    barbWire: { type: Number },
    cost: {
      type: Number,default:0
    },
    damage: {
      type: Number,
      enum:damageArr
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  path: {
    width: { type: Number },
    length: { type: Number },
    surfaceDressing: { type: Number },
    cost: {
      type: Number,default:0
    },
    damage: {
      type: Number,
      default:0,
      enum: damageArr,
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  road: {
    width: { type: Number },
    length: { type: Number },
    surfaceDressing: { type: Number },
    cost: {
      type: Number,default:0
    },
    damage: {
      type: Number,
      enum: damageArr,
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  driveWay: {
    width: { type: Number },
    length: { type: Number },
    surfaceDressing: { type: Number },
    cost: {
      type: Number,
    },
    damage: {
      type: Number,
      enum: damageArr,
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  drainage: {
    depth: { type: Number },
    length: { type: Number },
    concreteWork: { type: Number },
    blockWork: { type: Number },
    formWork: { type: Number },
    reinforcement: { type: Number },
    rendering: { type: Number },
    cost: {
      type: Number,
    },
    damage: {
      type: Number,
      enum: damageArr,
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  electricity: {
    pipingAccessories: { type: String },
    cable: { type: String },
    source: { type: String ,
      enum: ["Public", "Generator", "Solar","Turbine"],
    },
    cost: {
      type: Number,default:0
    },
    damage: {
      type: Number,
      enum: damageArr,
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  water: {
    pipingAccessories: { type: String },
    source: { type: String ,
      enum: ["Public", "Borehole", "Well","Dam"],
    },
    cost: {
      type: Number,default:0
    },
    damage: {
      type: Number,
      enum: damageArr,
    },
    condition: {
      type: String,
      enum: conditionArr,
    },
  },
  image:{type: String,required:true},

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Site", siteSchema);




//basic schema
// const coordinate = new Schema({
//   logtitude: { type: Number },
//   latittude: { type: Number },
// });

// const basicSchema = new Schema({
//   name: { type: String },
//   siteCode: { type: Number },
//   siteAddress: { type: String },
//   siteArea: { type: Number },
//   state: { type: String },
//   lga: { type: String },
//   location: coordinate,
//   picture: { type: String },
// });

// //gate Schema
// const gateSchema = new Schema({
//   size: { type: Number },
//   thickness: { type: String },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });

// //fence Schema
// const fenceSchema = new Schema({
//   height: { type: Number },
//   perimeter: { type: Number },
//   concrateWork: { type: Number },
//   blockWork: { type: Number },
//   formWork: { type: Number },
//   reinforcement: { type: Number },
//   rendering: { type: Number },
//   barbWire: { type: Number },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });

// //road schema
// const roadSchema = new Schema({
//   width: { type: Number },
//   length: { type: Number },
//   surfaceDressing: { type: Number },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });

// //path schema
// const pathSchema = new Schema({
//   width: { type: Number },
//   length: { type: Number },
//   surfaceDressing: { type: Number },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });

// //driveway schema
// const driveWaySchema = new Schema({
//   width: { type: Number },
//   length: { type: Number },
//   surfaceDressing: { type: Number },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });

// //drainageSchema
// const drainageSchema = new Schema({
//   depth: { type: Number },
//   length: { type: Number },
//   concrateWork: { type: Number },
//   blockWork: { type: Number },
//   formWork: { type: Number },
//   reinforcement: { type: Number },
//   rendering: { type: Number },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });

// //electricity Schema
// const electricitySchema = new Schema({
//   pipingAccesories: { type: String },
//   cable: { type: String },
//   source: { type: String },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });

// //water Schema
// const waterSchema = new Schema({
//   pipingAccesories: { type: String },
//   source: { type: String },
//   condition: {
//     type: String,
//     enum: ["Working ", "Not Working", "Repairable"],
//   },
// });


