const express = require("express");

// Import Campaign controllers
const {
  getAllCampaign,
  getCampaignById,
  createNewCampaign,
  updateCampaignById,
  deleteCampaignById,
} = require("../controllers/campaigns");

// Import Situations controller
const {
  createNewSituations,
  updateSituationById,
  getAllsituations
} = require("./../controllers/situations");

// Middleware
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// Create campaigns router
const campaignsRouter = express.Router();

/*
 * Testing Routes:
 * POST ->    NEW Situation    http://localhost:5000/campaigns/4/comments/
 * GET - POST NEW Campaigns -> http://localhost:5000/campaigns/
 * POST NEW Situation       -> http://localhost:5000/campaigns/3/situation
 * GET  All Campaigns ->       http://localhost:5000/campaigns/search?campaigns=2
 * PUT  Update Campaign ById-> http://localhost:5000/campaigns/2
 * DELETE Campaign ById->      http://localhost:5000/campaigns/2

 */

/*
 * Testing Objects:
 * Article: {
    "title":"Hello World",
    "description":"This is for testing",
    "author":"61d17b37d3a54990e227a549"
}

 *  Comment: {
    "comment":"wow",
    "commenter":"61d17b37d3a54990e227a549"
}
 */

campaignsRouter.post(
  "/",
  authentication,
  authorization("CREATE_CAM&SIT"),
  createNewCampaign
);

campaignsRouter.get("/", getAllCampaign);

campaignsRouter.post(
  "/:id/situations",
  authentication,
  authorization("CREATE_CAM&SIT"),
  createNewSituations
);
campaignsRouter.get("/search", getCampaignById);

campaignsRouter.put(
  "/:id",
  authentication,
  authorization("UPDATE_CAM&SIT"),
  updateCampaignById
);

campaignsRouter.delete(
  "/:id",
  authentication,
  authorization("DELETE_CAM&SIT"),
  deleteCampaignById
);

campaignsRouter.put(
  "/situations/:id",
  authentication,
  authorization("UPDATE_CAM&SIT"),
  updateSituationById
);


campaignsRouter.get("/:id/situations", getAllsituations);
// ("User");

1;
// ("MAKE_DONATIONS");
// 2;
// ("READ");

// ("ADMIN");
// 1;
// ("CREATE_CAM&SIT");
// 2;
// ("EDIT_CAM&SIT");
// 3;
// ("UPDATE_CAM&SIT");
// 4;
// ("DELETE_CAM&SIT");

module.exports = campaignsRouter;
