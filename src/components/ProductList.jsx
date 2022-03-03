import React from "react";
import Product from "./Product.jsx";

const ProductList = ({ products, incrementQuantity,decrementQuantity }) => {
  return (
    <div>
      {products.map((product, i) => {
        return (
          <Product
            product={product}
            key={i}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            index={i}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
