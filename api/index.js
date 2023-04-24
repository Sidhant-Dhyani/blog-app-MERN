const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const cookieParser = require('cookie-parser');
const salt = bcrypt.genSaltSync(10);
const secret = "sidhant-blog";

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
// app.use(cookieParser);

mongoose
  .connect("mongodb://127.0.0.1:27017/UsersDB")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database.");
  });

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    userDoc
      .save()
      .then(() => {
        console.log("Item Saved.");
      })
      .catch((error) => {
        console.log(error);
      });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({  });
  console.log(userDoc)
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    const token = jwt.sign({ username, id: userDoc._id }, secret, {}, (err) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json( { error: "Invalid login credentials" } );
  }
});

// app.get('/profile', (req, res) => {
//   res.json(req.cookies);
// } )

app.listen(3000);