const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  message: String,
  reply: String,
});

const MessageModel = mongoose.model("message", messageSchema);

module.exports = {
  MessageModel,
};
