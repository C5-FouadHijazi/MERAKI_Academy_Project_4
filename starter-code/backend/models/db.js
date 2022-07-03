const mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect("mongodb+srv://FouadHijazi:uHAiNLux9KnCQiiW@cluster0.zwg48bv.mongodb.net/FouadHijaziDatabase?retryWrites=true&w=majority").then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
