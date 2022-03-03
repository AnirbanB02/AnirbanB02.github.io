import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi",
      quantity: 0,
    },
  ];
  const [productList, setProductList] = useState(products);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    // console.log(newProductList[index]);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity = (newProductList[index].quantity > 0) ? newProductList[index].quantity-1 : 0;
    // console.log(newProductList[index]);
    setProductList(newProductList);
  };
  const reset = () => {
    let newProductList = [...productList];
    newProductList.forEach(product => {
      product.quantity = 0;
    })
    setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <ProductList
          products={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
      <Footer products={productList} reset={reset} />
    </>
  );
}

export default App;
