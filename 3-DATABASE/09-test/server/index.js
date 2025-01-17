require("./config/db"); // for getting access to the database

const express = require("express");
var passport = require("passport");
var session = require("express-session");
var cors = require("cors");

const app = express();
const port = 2000;

var routes = require("./routes/userRoutes");

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//accessing the files before running routes
app.use(express.urlencoded({ extended: true })); // if we get a text array
app.use(express.json()); // if we get json file

app.use(cors(corsOptions));

app.use(session({ secret: "PassportSession!!" }));
app.use(passport.initialize());
app.use(passport.session());

// for running routes
app.use("/", routes);

app.listen(port, (res) => {
  console.log(`server running at http://localhost:${port}`);
});
