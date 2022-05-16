const campaignsModel = require("../models/campaignsSchema");

/* {   "title": "ايتام",
"description": "قال الإمام النووي: قوله صلى الله عليه وسلم: (كافل اليتيم له أو لغيره أنا وهو كهاتين في الجنة ) كافل اليتيم القائم بأموره من نفقة وكسوة وتأديب وتربية وغير ذلك وهذه الفضيلة تحصل لمن كفله من مال نفسه ، أو من مال اليتيم بولاية شرعية.",
"img": "https://cdn-5e6c81e5f911c80ca0fdddf4.closte.com/wp-content/uploads/2021/09/children-600.jpg"} */

// This function creates new Campaign
const createNewCampaign = (req, res) => {
  const { title, description, img } = req.body;
  const newCampaign = new campaignsModel({
    title,
    description,
    img,
  });

  newCampaign
    .save()
    .then((campaigns) => {
      res.status(201).json({
        success: true,
        message: `Campaign created`,
        campaigns: campaigns,
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

// This function returns the Campaign
const getAllCampaign = (req, res) => {
  campaignsModel
    .find({})
    .then((campaigns) => {
      if (campaigns.length) {
        res.status(200).json({
          success: true,
          message: `All the Campaign`,
          campaigns: campaigns,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No Campaign Yet`,
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

// This function returns Campaign by its id
const getCampaignById = (req, res) => {
  let id = req.query.id;
  campaignsModel
    .findById(id)
    .populate("title -_id")
    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Campaign is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The Campaign ${id} `,
        campaigns: result,
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

// This function updates Campaign by its id
const updateCampaignById = (req, res) => {
  const _id = req.params.id;

  campaignsModel
    .findByIdAndUpdate(_id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Campaign: ${_id} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Campaign updated`,
        article: result,
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

// This function deletes a specific Campaign by its id
const deleteCampaignById = (req, res) => {
  const id = req.params.id;
  campaignsModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Campaign: ${id} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Campaign deleted`,
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

module.exports = {
  createNewCampaign,
  getAllCampaign,
  getCampaignById,
  updateCampaignById,
  deleteCampaignById,
};
