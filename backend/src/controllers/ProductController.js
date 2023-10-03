const Product = require("../models/productModel");
const ErrorHander = require("../../utils/errorhander");
const catchAsynErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../../utils/apifeatures");

//Create Product
exports.CreateProduct = catchAsynErrors(async (req, res, next) => {
  //console.log("body", req.body);
  req.body.user = req.user.id;

  var newProduct = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: newProduct,
    message: "Product Successfully Created.",
  });
});

//get all products
exports.getAllProducts = catchAsynErrors(async (req, res, next) => {
  const resultPerPage = 10;
  const productCount = await Product.countDocuments();

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeatures.query;

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

exports.updateProduct = catchAsynErrors(async (req, res, next) => {
  let updateproduct = await Product.findById(req.params.id);

  if (!updateproduct) {
    return next(new ErrorHander("Product not found", 500));
  }

  updateproduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    sucess: true,
    data: updateproduct,
    message: "Product Successfully updated.",
  });
});

exports.deleteProduct = catchAsynErrors(async (req, res, next) => {
  let deleteproduct = await Product.findById(req.params.id);

  if (!deleteproduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  await Product.findOneAndRemove({ _id: req.params.id });

  res.status(200).json({
    success: true,
    message: "Product Successfully Deleted.",
  });
});

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
