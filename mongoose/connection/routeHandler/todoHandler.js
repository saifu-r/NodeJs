const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const checkLogin= require('../middlewares/checkLogin')

const todoSchema = require("../todoSchema/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema); //very important
//create a Mongoose model named Todo based on the todoSchema

//Get all the todos

router.get("/",checkLogin, async (req, res) => {
  try {
    const results = await Todo.find().select({ _id: 0, __v: 0, date: 0 });
    res.status(200).json({
      message: "Todo was shown successfully!",
      savedTodo: results, // If you want to send the saved todo back to the client
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
      message: error.message, // Sending the error message for debugging
    });
  }
});

router.get("/active", async (req, res) => {
  const todo = new Todo();
  const data = await todo.findActive();

  res.status(200).json({
    data: data,
  });
});

router.get("/js", async (req, res) => {
  const data = await Todo.findByJS();

  res.status(200).json({
    data: data,
  });
});

router.get("/language", async(req, res)=>{
    const data= await Todo.find().byLanguage('express')
    res.status(200).json({
        data: data
    })
})

router.get("/:id", async (req, res) => {
  try {
    const data = await Todo.find({ _id: req.params.id });
    res.status(200).json({
      message: "Todo was found successfully!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
      message: error.message, // Sending the error message for debugging
    });
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json({
      message: "Todo was inserted successfully!",
      savedTodo: savedTodo, // If you want to send the saved todo back to the client
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
      message: error.message, // Sending the error message for debugging
    });
  }
});

router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
      message: "Todo was inserted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
      message: error.message, // Sending the error message for debugging
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Todo.updateOne(
      { _id: req.params.id },
      { $set: { status: "active" } }
    );
    res.status(200).json({
      message: "Todo was updated successfully!",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
      message: error.message, // Sending the error message for debugging
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Todo was deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
      message: error.message, // Sending the error message for debugging
    });
  }
});

module.exports = router;
