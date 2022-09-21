import React, { useContext, useEffect, useState } from "react";
import Category from "../../CategoryComponent/Category";
import "./AllCategories.css";
import axios from "axios";
function AllCategories() {
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [related, setRelated] = useState([]);

  const getAllCategories = async () => {
    try {
      await axios.get("/all-categories").then((response) => {
        setCategories(response.data);
      });
    } catch (error) {
      console.log(error);
      if(error){
        setCategories(null)
      }
    }
  };

  const goHome = () => {
    setCategoryName();
    getAllCategories();
  };
  useEffect(() => {
    getAllCategories();

    // getProduct()
  }, []);
  let arr = [];

  const callMap = async () => {
    await categories?.map((data, index) => {
      data.category.map((d) => {
        d.category.map((e) => {
          arr.push(e.products[0]);
        });
      });
    });

    setRelated(arr.splice(0, 5));
  };

  useEffect(() => {
 
    if (categories[0]?.product_name) {
      setRelated(categories);
    }
    callMap();
  }, [categories]);

  const addProducts = (data) => {
    setRelated(data);
  };

  const selectCategory = (data, category) => {
    setCategories(data);
    setCategoryName(category.category_name || category.name);
  };

  return (
    <div className="page">
      <h1>
        {categoryName || "Categories"} ({categories.length})
      </h1>
      <div onClick={() => goHome()} className="home">
        <h4>Go Home</h4>
      </div>

      {!categories[0]?.product_name ? (
        <div className="List">
          {categories.map((data, index) =>
            categories ? (
              <>
                <Category
                  selectCategory={selectCategory}
                  addProducts={addProducts}
                  data={data}
                />
              </>
            ) : null
          )}
        </div>
      ) : null}

      <div className="products">
        <table>
          <tr>
            <th>
              <input type={"checkbox"} />
            </th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>

          {related?.map((data, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>{data.product_name}</td>
                <td>{data.price}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default AllCategories;
