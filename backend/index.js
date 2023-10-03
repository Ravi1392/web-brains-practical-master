const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./src/routes/users.js");
const productRoute = require("./src/routes/productRoute.js");
const addToCardRoute = require("./src/routes/cardRoute.js");
const cors = require("cors");
const dotenv = require("dotenv");
const ConnDatabase = require("./config/database");
const errorMiddleware = require("./src/middleware/error");
const cookieParser = require("cookie-parser");

//Config
dotenv.config({ path: "config/config.env" });

//Connecting to Database
ConnDatabase();

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// define a simple route
app.get("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Welcome to Ecomm app" });
});

app.use("/", usersRouter);
app.use("/", productRoute);
app.use("/user/", addToCardRoute);

//Error Handler Middleware
app.use(errorMiddleware);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
