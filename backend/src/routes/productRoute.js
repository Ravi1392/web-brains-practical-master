var express = require("express");
const productController = require("../controllers/ProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
var router = express.Router();

//Crud Operation By Admin Start
router.post(
  "/createproduct",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  productController.CreateProduct
);

router.get(
  "/products",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  productController.getAllProducts
);

router.post(
  "/updateproduct/:id",
  authorizeRoles("admin"),
  productController.updateProduct
);

router.post(
  "/deleteproduct/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  productController.deleteProduct
);

router.post(
  "/productdetail/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  productController.getProductDetail
);

//Crud Operation By Admin End

module.exports = router;
