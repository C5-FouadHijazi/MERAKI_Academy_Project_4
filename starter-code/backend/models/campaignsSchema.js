const mongoose = require("mongoose");

const campaigns = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  // catId from situation
  situation: [{ type: mongoose.Schema.Types.ObjectId, ref: "Situations" }],
});

module.exports = mongoose.model("Campaigns", campaigns);
