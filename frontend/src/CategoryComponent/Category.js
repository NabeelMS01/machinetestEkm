import React, { useEffect } from "react";
import "../CategoryComponent/Category.css";
function Category({ data, selectCategory, addProducts, getProduct }) {
  useEffect(() => {
    // console.log(data.products );
    // getProduct(data.category[0])
  }, []);
  return (
    <div
      className="categoryListData"
      onClick={() => selectCategory(data.products || data.category, data)}
    >
      <h4>
        {data.name || data.category_name || data.product_name}{" "}
        {data.category?.length
          ? `(${data.category?.length || data.products?.length} )`
          : ""}
      </h4>
    </div>
  );
}

export default Category;
