const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
// console.developers.google.com
// Client ID: keys.js
// Client Secret: keys.js

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // 30 days = 24 hrs - 60 minutes - 60 seconds - 1000 ms
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
//whenever Heroku runs our app, it injects environment variables
app.listen(PORT);
// node is listening to port 5000 (express is telling node to watch for traffic)

// app.get("/", (req, res) => {
//   res.send({ bye: "Arya" });
// });

//app: Express App to register this route handler with
//get: Watch for incoming requests with this method
//'/': Watch for requests trying to access '/'
//req: Object representing the incoming request
//res: Object representing the outgoing response
//res.send: Immediately send some JSON back to who ever made this request
