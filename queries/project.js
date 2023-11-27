const db = require("../db/dbConfig.js");

const getAllProperties = async () => {
  try {
    const allProperties = await db.any("SELECT * FROM property");
    return allProperties;
  } catch (err) {
    return err;
  }
};

const getOneProperty = async (id) => {
  try {
    const getOneProperty = await db.one(
      "SELECT * FROM property WHERE id=$1",
      id
    );
    return getOneProperty;
  } catch (error) {
    return error;
  }
};

const createProperty = async (property) => {
  try {
    const createdProperty = await db.one(
      "INSERT INTO property ( title,descriptions,imageurl,builddate,contact,review,available,price,homeaddress) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
      [
        property.title,
        property.descriptions,
        property.imageurl,
        property.builddate,
        property.contact,
        property.review,
        property.available,
        property.price,
        property.homeaddress,
      ]
    );
    return createdProperty;
  } catch (error) {
    return error;
  }
};

const deleteProperty = async (id) => {
  try {
    const deletedProperty = await db.one(
      "DELETE FROM property WHERE id=$1 RETURNING *",
      id
    );
    return deletedProperty;
  } catch (error) {
    return error;
  }
};

const updateProperty = async (id, property) => {
  try {
    const {
      title,
      descriptions,
      imageurl,
      builddate,
      contact,
      review,
      available,
      price,
      homeaddress,
    } = property;

    const updatedProperty = await db.one(
      "UPDATE property SET title=$1, descriptions=$2, imageurl=$3, builddate=$4, contact=$5, review=$6, available=$7, price=$8, homeaddress=$9 WHERE id=$10 RETURNING *",
      [
        title,
        descriptions,
        imageurl,
        builddate,
        contact,
        review,
        available,
        price,
        homeaddress,
        id,
      ]
    );

    return updatedProperty;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllProperties,
  getOneProperty,
  createProperty,
  deleteProperty,
  updateProperty,
};