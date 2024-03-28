import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const addProductData = {
      name: name,
      price: price,
      category: category,
      userId: JSON.parse(localStorage.getItem("user"))._id,
      company: company,
    };
    console.log(addProductData);

    axios
      .post(`http://localhost:8000/add-products`, addProductData)
      .then((response) => {
        const DataFromServer = response.data;
        if (!DataFromServer) {
          console.log("add-productssuccessful. added product:", DataFromServer);
          // localStorage.setItem("addProductData", JSON.stringify(addProductData));
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-1 py-md-1"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Add Product</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="name"
                    className="form-control rounded-3"
                    id="floatingname"
                    placeholder="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingname">name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="price"
                    className="form-control rounded-3"
                    id="floatingprice"
                    placeholder="price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingprice">price</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="category"
                    className="form-control rounded-3"
                    id="floatingcategory"
                    placeholder="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingcategory">category</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="company"
                    className="form-control rounded-3"
                    id="floatingcompany"
                    placeholder="company"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingcompany">company</label>
                </div>

                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
