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
  "email":"basher@gmail.com",
  "password": "123456"
}
*/

loginRouter.post("/", login);

module.exports = loginRouter;
