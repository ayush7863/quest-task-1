const express = require("express");
const { connection } = require("./db");
const { MessageModel } = require("./model/message.model");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/getMessage", async (req, res) => {
  try {
    const getAllMessage = await MessageModel.find();
    res.status(200).send({ msg: getAllMessage });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

app.post("/message", async (req, res) => {
  try {
    const sendMessage = new MessageModel(req.body);
    await sendMessage.save();
    res.status("200").send({ msg: "Successfully Added" });
  } catch (error) {
    res.status("404").send({ msg: error });
  }
});

app.post("/reply", async (req, res) => {
  try {
    const message = await MessageModel.find(req.body);
    console.log(message);
    if (message.length > 0) {
      res.status(200).send({ msg: message });
    } else {
      res.status(400).send("Ask Another Question");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
    console.log("App is running on 8080 port");
  } catch (error) {
    console.log(error.message);
  }
});
