var express = require("express");
const cardController = require("../controllers/CardController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
var router = express.Router();

router.get(
  "/products_list",
  isAuthenticatedUser,
  authorizeRoles("user"),
  cardController.getAllProducts
);

router.post(
  "/productdetail/:id",
  isAuthenticatedUser,
  authorizeRoles("user"),
  cardController.getProductDetail
);

//Product add into Card

router.post(
  "/productaddtocard/:id",
  isAuthenticatedUser,
  authorizeRoles("user"),
  cardController.CreateCard
);

router.get(
  "/getAllCards",
  isAuthenticatedUser,
  authorizeRoles("user"),
  cardController.getAllCards
);

router.post(
  "/deletecard/:id",
  isAuthenticatedUser,
  authorizeRoles("user"),
  cardController.deleteCardItem
);

module.exports = router;
