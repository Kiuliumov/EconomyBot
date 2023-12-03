const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true, },
  balance: { type: Number, default: 10 },
});

const model = mongoose.model('cantinadb', profileSchema);
module.exports = model;