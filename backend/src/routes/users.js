var express = require("express");
var userController = require("../controllers/Usercontroller");
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

var router = express.Router();
const path = require("path");

//User Registration

router.post("/createUser", userController.CreateUser);

//Login User

router.post("/userLogin", userController.loginUser);
router.get("/loginOut", userController.logout);

module.exports = router;
