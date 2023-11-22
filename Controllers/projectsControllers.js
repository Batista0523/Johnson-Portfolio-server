const express = require("express");

const {
  getAllProperties,
  getOneProperty,
  createProperty,
  deleteProperty,
  updateProperty,
} = require("../queries/project.js");

const property = express.Router();

property.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneProperty = await getOneProperty(id);
  if (oneProperty) {
    res.json(oneProperty);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

property.get("/", async (req, res) => {
  const allProperty = await getAllProperties();
  if (allProperty[0]) {
    res.status(200).json({ success: true, data: { payload: allProperty } });
  } else {
    res.status(404).json({ success: false, data: { error: "Server Error" } });
  }
});

property.post("/", async (req, res) => {
  try {
    const createdProperty = await createProperty(req.body);
    res.json(createdProperty);
  } catch (error) {
    res.status(404).json({ error: "Oh cannot create it" });
  }
});

property.delete("/:id", async (req, res) => {
  try {
    const deletedProperty = await deleteProperty(id);
    if (deletedProperty) {
      res
        .status(200)
        .json({ success: true, payload: { data: deletedProperty } });
    } else {
      res.status(404).json("Property Not Found");
    }
  } catch (err) {
    res.send(err);
  }
});

property.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProperty = await updateProperty(id, req.body);
  if (updatedProperty.id) {
    res.status(200).json(updatedProperty);
  } else {
    res.status(404).json("no property found with taht id");
  }
});

module.exports = property;