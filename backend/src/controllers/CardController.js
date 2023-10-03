const Product = require("../models/productModel");
const Card = require("../models/cardModel");
const ErrorHander = require("../../utils/errorhander");
const catchAsynErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../../utils/apifeatures");

//get all products For User
exports.getAllProducts = catchAsynErrors(async (req, res, next) => {
  const productCount = await Product.countDocuments();

  const products = await Product.find();

  if (!products.length) {
    return next(new ErrorHander("Products not found", 404));
  }
  res.status(200).json({
    success: true,
    data: products,
    totalProducts: productCount,
    message: "Products Successfully get.",
  });
});

//Product Detail For User
exports.getProductDetail = catchAsynErrors(async (req, res, next) => {
  let productdetail = await Product.findById(req.params.id);

  if (!productdetail) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    status: true,
    data: productdetail,
    message: "Product Successfully get.",
  });
});

//Product Add To card
exports.CreateCard = catchAsynErrors(async (req, res, next) => {
  // console.log("body", req.user.id);
  const product_id = req.params.id;

  let productdetail = await Product.findById(product_id);

  req.body.product_id = product_id;
  req.body.user_id = req.user.id;

  if (!productdetail) {
    return next(new ErrorHander("Product not found", 404));
  }

  var newCard = await Card.create(req.body);

  res.status(201).json({
    success: true,
    data: newCard,
    message: "Product Successfully Added into Card.",
  });
});

//Get User Card Items
exports.getAllCards = catchAsynErrors(async (req, res, next) => {
  // console.log("body", req.user.id);
  const userId = req.user.id;

  let productdetail = await Card.find({ userId });

  if (!productdetail) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(201).json({
    success: true,
    data: productdetail,
    message: "Product Successfully Added into Card.",
  });
});

//Delete User Card Items
exports.deleteCardItem = catchAsynErrors(async (req, res, next) => {
  const cardId = req.params.id;
  const userId = req.user.id;

  let deleteCard = await Card.findById(cardId);

  if (!deleteCard) {
    return next(new ErrorHander("Card not found", 404));
  }

  await Card.findOneAndRemove({ _id: cardId, userId: userId });

  res.status(200).json({
    success: true,
    message: "Product Successfully Remove from Card.",
  });
});
