const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = mongoose.Schema({
  category_name: { type: String, unique: true },
  subcategory: [
    {
      name: String,
      category: [
        {
          name: String,
          products: [
            {
              product_name: String,
              price: String,
            },
          ],
        },
      ],
    },
  ],
});

const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
