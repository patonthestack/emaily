const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//app: Express App to register this route handler with
//get: Watch for incoming requests with this method
//'/': Watch for requests trying to access '/'
//req: Object representing the incoming request
//res: Object representing the outgoing response
//res.send: Immediately send some JSON back to who ever made this request

app.listen(5000);
// node is listening to port 5000 (express is telling node to watch for traffic)
