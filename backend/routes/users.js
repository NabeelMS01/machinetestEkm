var express = require("express");
var router = express.Router();

const {addCategory,getAllcategories,addsubcategory} = require("../controllers/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add-category", addCategory);

router.get('/all-categories',getAllcategories)

router.post("/add-subcategory", addsubcategory);

module.exports = router;
