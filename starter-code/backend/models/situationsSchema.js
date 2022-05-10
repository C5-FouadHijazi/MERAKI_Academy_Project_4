const mongoose = require("mongoose");

const situations = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  caseNumber: { Number, required: true },
  img: { type: String, required: true },
  amountNedded: { Number },
  amoutStillNedded: { Number },
  amoutDotated: { Number },
});

module.exports = mongoose.model("Situations", situations);
