var express = require("express");
var session = require("express-session");
var passport = require("passport");
var GitHubStrategy = require("passport-github2");
var app = express();

app.use(
  session({
    secret: "githubauth123",
    resave: false,
    saveUninitialized: false,
  })
);

// for passport
app.use(passport.initialize());
// for passport session
app.use(passport.session());

// for using template engine
app.set("view engine", "ejs");

var GITHUB_CLIENT_ID = "1ff20bfdc41f628f6e9c";
var GITHUB_CLIENT_SECRET_KEY = "6723f1cc568b6092c747b4be04b00d115914652b";
var REDIRECT_URI = "http://localhost:2000/github/callback";

var userprofile; //for taking from profile that helps in displaying the profile after auth

// default route
app.get("/", (req, res) => {
  res.render("login");
});

//success route
app.get("/success", (req, res) => {
  res.render("profile", { name: userprofile.displayName });
});

app.get("/logout", (req, res) => {
  console.log("I AM LOGOUT");
  req.session.destroy();
  res.redirect("/login");
});

//error route
app.get("/error", (req, res) => {
  res.send(err);
});

// authorization with passport
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET_KEY,
      callbackURL: REDIRECT_URI,
    },
    function (accessToken, refreshToken, profile, done) {
      userprofile = profile;
      //   console.log(userprofile);
      return done(null, profile);
    }
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  )
);

// when login button is clicked
app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// after google authenticate is done
app.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect profile page.
    res.redirect("/success");
  }
);

// to store information in session
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// to retrieve info from passport session
passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

app.listen(2000, (err) => {
  if (err) console.log(err);
  else console.log("server is running at 2000");
});
