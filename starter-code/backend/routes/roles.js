const express = require("express");

// Import roles controller
const { createNewRole } = require("../controllers/roles");

// Create roles router
const rolesRouter = express.Router();

/*
 * Testing Routes:
 * POST -> http://localhost:5000/roles/
*/

/*
{
  "role": "USER",
  "permissions": ["MAKE_DONATIONS","READ"]
}
{
  "role": "ADMIN",
  "permissions": ["CREATE_CAM&SIT","EDIT_CAM&SIT","UPDATE_CAM&SIT","DELETE_CAM&SIT"]
}
*/

rolesRouter.post("/", createNewRole);

module.exports = rolesRouter;
