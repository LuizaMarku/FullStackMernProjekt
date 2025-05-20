const express = require("express");
const itemModel = require("../Models/item");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
    },
  });


const fileFilter = (req, file, cb) => {
    const allowedFileTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  let upload = multer({ storage, fileFilter });
  

  app.post("/createItem/", upload.single("itemImage"), async (req, res) => {
    try {
      const newItem = new itemModel({
        ...req.body,
        itemImage: req.file.filename,
      });
      await newItem.save();
      res.status(200).send(newItem);
    } catch (err) {
      console.log(err);
      res.status(500).send("Not added" + err);
    }
  });

  app.get("/readAllItem/", async (req, res) => {
    try {
      const allItem = await itemModel.find({});
      console.log(allItem); 
      res.status(200).send(allItem);
    } catch (err) {
      console.log(err);
      res.status(500).send("Not read all" + err);
    }
  });

  app.get("/readOneItem/:id/", async (req, res) => {
    try {
      const idItem = req.params.id;
      const oneItem = await itemModel.findById({ _id: idItem });
      res.status(200).send(oneItem);
    } catch (err) {
      console.log(err);
      res.status(500).send("Not read one" + err);
    }
  });

  app.patch("/updateItem/:id/", upload.single("itemImage"), async (req, res) => {
    try {
      const idItem = req.params.id;
      const itemInfo = { ...req.body };
      if (req.file) {
        itemInfo.itemImage = req.file.filename;
      }
      const updateItem = await itemModel.findByIdAndUpdate(
        { _id: idItem },
        { $set: itemInfo },
        { new: true }
      );
      res.status(200).send(updateItem);
    } catch (err) {
      console.log(err);
      res.status(500).send("Not updated" + err);
    }
  });
  
  app.delete("/deleteItem/:id/", async (req, res) => {
    try {
      const idItem = req.params.id;
      await itemModel.deleteOne({ _id: idItem });
      res.status(200).send("Deleted");
    } catch (err) {
      console.log(err);
      res.status(500).send("Not deleted" + err);
    }
  });
  
  module.exports = app;
  