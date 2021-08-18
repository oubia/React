import React from "react";
import { useState } from "react";
function AddItemsfunc(props) {
  const [name, SetName] = useState("");
  const [price, SetPrice] = useState(0);
  const [type, SetType] = useState("");
  const [brand, SetBrand] = useState("");

  const AdditemsButtonPressed = () => {
    props.addItemsprops({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    SetName("");
    SetPrice(0);
    SetType("");
    SetBrand("");
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Add a item</h2>
      </div>
      <div className="row">
        <form>
          <label htmlFor="name-field">Name:</label>
          <input
            id="name-field"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
          <label htmlFor="price-field">Price:</label>
          <input
            id="price-field"
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => SetPrice(e.target.value)}
          />
          <label htmlFor="type-field">type:</label>
          <input
            id="type-field"
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => SetType(e.target.value)}
          />
          <label htmlFor="brand-field">Brand:</label>
          <input
            id="brand-field"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => SetBrand(e.target.value)}
          />
        </form>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className=" col-4 btn btn-secondary"
          onClick={AdditemsButtonPressed}
        >
          Add items
        </button>
      </div>
    </div>
  );
}
export default AddItemsfunc;
