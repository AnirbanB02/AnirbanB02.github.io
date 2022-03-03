import React from 'react'

const Footer = ({products,reset}) => {
  const calculateTotalPrice = (products) => {
    let total = 0;
    products.forEach(product => {
      total += (product.price*product.quantity);
    });
    return total;
  }
  const totalPrice = calculateTotalPrice(products);
  return (
    <div className='row fixed-bottom'>
        <div className="col-2 btn btn-danger"onClick={reset}><h1>RESET</h1></div>
        <div className="col-8 btn btn-dark"><h1>₹{totalPrice}</h1></div>
        <div className="col-2 btn btn-info"><h1>PAY</h1></div>
    </div>
  )
}

export default Footer