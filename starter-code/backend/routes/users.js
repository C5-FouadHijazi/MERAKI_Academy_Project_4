const express = require("express");
const { register } = require("../controllers/users");

// define router
const usersRouter = express.Router();

/*
 * Testing Routes:
 * POST -> http://localhost:5000/users/
*/

/*
 * Testing Object:
{
   "firstName": "fouad",
  "lastName": "hijazi",
  "country": "Jordan",
  "email":"fouadhijazi92@gmail.com",
  "password": "123456",
  "role":"627a3feb52be2ae46b48b616"
});*/ 
/*
* Testing Object: User
{
   "firstName": "Amine",
  "lastName": "Alwani",
  "country": "Syria",
  "email":"Amine@gmail.com",
  "password": "123456",
  "role":"627a3fc4905d75517127c1f0"
  }
});*/ 

usersRouter.post("/", register);

module.exports = usersRouter;
