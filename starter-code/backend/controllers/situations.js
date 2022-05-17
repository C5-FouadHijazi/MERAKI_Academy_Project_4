const situationsModel = require("../models/situationsSchema");
const campaignsModel = require("../models/campaignsSchema");

// This function creates a new Situation for a specific Campagins
const createNewSituations = (req, res) => {
  console.log(req);
  console.log("--------------------------");
  const campaignId = req.params.id;
  const {
    title,
    description,
    caseNumber,
    img,
    amountNedded,
    amoutStillNedded,
    amountDonated,
  } = req.body;
  const newSituation = new situationsModel({
    title,
    description,
    caseNumber,
    img,
    amountNedded,
    amoutStillNedded,
    amountDonated,
  });
  newSituation
    .save()
    .then((result) => {
      console.log("The Updated Situation", result);
      campaignsModel
        .findByIdAndUpdate(
          { _id: campaignId },
          { $push: { situation: result._id } }
        )
        .then((result) => {
          res.status(201).json({
            success: true,
            message: `situations added`,
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

//amountNedded = 500
//amountDonated = 200 => 200 + 50 = 250
//amountNedded = amoutStillNedded -amountDonated

//how to update spesefic data by callculation in backend

// This function updates Campaign by its id
const updateSituationById = (req, res) => {
  const _id = req.params.id;
  const newDonate = req.body.amountDonated;

  situationsModel.findById({ _id }).then((result1) => {
    situationsModel
      .updateOne(
        {_id},
        {
          $set: {
            amountNedded: result1.amountNedded - newDonate,
            amountDonated: result1.amountDonated + newDonate,
          },
        },
        { new: true }
      )
      .then((result2) => {
        if (!result2) {
          return res.status(404).json({
            success: false,
            message: `The Situation: ${_id} is not found`,
          });
        }
        res.status(202).json({
          success: true,
          message: `Situation updated`,
          Situation: result2,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });
  });
  // console.log(
  //   situationsModel.find({ _id }).then(async (result) => {
  //     console.log("result2", result);
  //     return result;
  //   })
  // );
};

const getAllsituations = (req, res) => {
  const id = req.params.id;
  campaignsModel
    .find({ _id: id })
    .populate("situation")
    .then((result) => {
      console.log(result);
      if (result.length) {
        res.status(200).json({
          success: true,
          message: `All the situations`,
          situations: result[0].situation,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No situations Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  createNewSituations,
  updateSituationById,
  getAllsituations,
};
