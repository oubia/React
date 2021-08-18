import React, { useState } from "react";
function SearchBar(props) {
  const [name, SetName] = useState("");
  const [price, SetPrice] = useState(0);
  const [type, SetType] = useState("");
  const [brand, SetBrand] = useState("");

  const searchButtonPressed = () => {
    props.searchparams({ name: name, price: price, type: type, brand: brand });
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Search for an item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            id="name-field"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="price-field">Max Price:</label>
          <input
            id="price-field"
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => SetPrice(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="type-field">type:</label>
          <input
            id="type-field"
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => SetType(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="brand-field">Brand:</label>
          <input
            id="brand-field"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => SetBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4 " />
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
