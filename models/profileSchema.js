const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: true, require: true },
  balance: { type: Number, default: 10 },
});

