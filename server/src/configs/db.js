const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://virajgupta:${process.env.MONGO_KEY}@cluster0.wmplk.mongodb.net/q3task?retryWrites=true&w=majority`
  );
};

module.exports = connect;
