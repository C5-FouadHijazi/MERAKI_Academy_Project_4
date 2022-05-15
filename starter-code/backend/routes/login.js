const express = require("express");

// Import login controller
const { login } = require("../controllers/login");

// Create login router
const loginRouter = express.Router();

/*
 * Testing Routes:
 * POST -> http://localhost:5000/login/
 */

/*
 * Testing Object:
{
  "Admin"
   "email":"fouadhijazi92@gmail.com",
  "password": "123456",

  "User"
  "email":"basher@gmail.com",
  "password": "123456"
}
*/

loginRouter.post("/", login);

module.exports = loginRouter;
