const mongoose = require("mongoose");
// const Schema = mongoose.Schema; *equivalent below
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  //in billingRoutes.js, to save credits to a user
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
