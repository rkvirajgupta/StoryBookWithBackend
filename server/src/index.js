const express = require("express");
const { register, login } = require("./controllers/user.controller");
const { users } = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/register", register);
app.use("/login", login);
app.use("/users", users);
app.use("/post", postController);

module.exports = app;
