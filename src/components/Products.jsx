import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        console.log("Data:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:8000/products/${productId}`)
      .then((response) => {
        console.log("Product deleted successfully");
        getProducts();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const handleSearch = async (event) => {
    console.log(event.target.value);

    const key = event.target.value;
    if (key) {
        const result = await axios
      .get(`http://localhost:8000/search/${key}`)
      .then((response) => {
        console.log("Data:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }else{
        getProducts(); 
    }
    
  };

  return (
    <>
<div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
        style={{ minHeight: "79vh" }}
      >

      <div className="px-5 mx-auto" style={{ width: "70%" }}>
        <h1 className="fw-bold mb-0 fs-2">Products</h1>
        <input
          type="search"
          class="form-control my-3 ms-auto"
          style={{ width: "70%" }}
          placeholder="Search..."
          aria-label="Search"
          onChange={handleSearch}
        />
        <table className="table  table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Company</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) &&
              products.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.company}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger me-4"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                    <Link to={"/updateProducts/" + item._id}>Update</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default Products;
