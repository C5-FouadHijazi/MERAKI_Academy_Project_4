const mongoose = require("mongoose");

const situations = new mongoose.Schema({
  img: { type: String , required: true },
  
  title: { type: String , required: true },

  description: { type: String, required: true },

  caseNumber: {type: Number, required: true },


  amountNedded: { type: String , type:Number, required: true  },

  amoutStillNedded: {type: Number , required: true  },

  amountDonated: { type:Number ,default: 0 },
});

module.exports = mongoose.model("Situations", situations);
