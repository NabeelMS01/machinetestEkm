const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

const addCategory = asyncHandler(async (req, res) => {
  try {
    const { category_name } = req.body;
    console.log(req.body);
    const data = req.body;
    await Category.create(data)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  } catch (error) {
    console.log(error);
  }
});

//--------------------getAllcategories--------------------

const getAllcategories = asyncHandler(async (req, res) => {
  try {
    const data = await Category.find();
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    if (error) {
      res.status(404).json("something went wrong");
    }
  }
});

const addsubcategory = asyncHandler(async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = {
  addCategory,
  getAllcategories,
  addsubcategory,
};
