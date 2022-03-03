import React from "react";

const Product = ({ product, incrementQuantity,decrementQuantity, index }) => {
  return (
    <div className="row">
      <div className="col-4">
        <h1>
          {product.name}{" "}
          <span className="badge bg-secondary mx-2">₹{product.price}</span>
        </h1>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger" onClick={() => {decrementQuantity(index)}}>
            -
          </button>
          <button type="button" className="btn btn-warning">
            {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              incrementQuantity(index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-3">
        <h2>₹{product.price * product.quantity}</h2>
      </div>
    </div>
  );
};

export default Product;
