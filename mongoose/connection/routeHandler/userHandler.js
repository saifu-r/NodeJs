const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const userSchema = require("../todoSchema/userSchema");
const User = new mongoose.model("User", userSchema); //very important
//create a Mongoose model named User based on the userSchema

router.post("/", async (req, res) => {
  const encryptedPass = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: encryptedPass,
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      message: "Todo was inserted successfully!",
      savedUser: savedUser, // If you want to send the saved todo back to the client
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
      message: error.message, // Sending the error message for debugging
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user[0].password
      );

      if (isPasswordValid) {
        //generate token
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({
          access_token: token,
          message: "Login Successful!",
        });
      } else {
        res.status(401).json({
          error: "Authentication failed!",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed!",
      });
    }
  } catch (err) {
    res.status(401).json({
        error: "Authentication failed!",
      });
  }
});

module.exports = router;
