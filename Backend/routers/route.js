const router = require("express").Router();

const toDoList = require("../models/model");

router.post("/api/item", async (req, res) => {
  try {
    const newTask = new toDoList({
      item: req.body.item,
    });
    const saveTask = await newTask.save();
    res.status(200).json(saveTask);
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/items", async (req, res) => {
  try {
    const allTasks = await toDoList.find({});
    res.status(200).json(allTasks);
  } catch (err) {
    res.json(err);
  }
});

router.put("/api/item/:id", async (req, res) => {
  try {
    const updateTask = await toDoList.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item updated successfully.");
  } catch (err) {
    res.json(err);
  }
});

router.delete("/api/item/:id", async (req, res) => {
  try {
    const deleteTask = await toDoList.findByIdAndDelete(req.params.id);
    res.status(200).json("Item deleted successfully.");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
