const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "Arya" });
});

//app: Express App to register this route handler with
//get: Watch for incoming requests with this method
//'/': Watch for requests trying to access '/'
//req: Object representing the incoming request
//res: Object representing the outgoing response
//res.send: Immediately send some JSON back to who ever made this request

const PORT = process.env.PORT || 5000;
//whenever Heroku runs our app, it injects environment variables
app.listen(PORT);
// node is listening to port 5000 (express is telling node to watch for traffic)
