import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  let price = 0;
  let tax = 0;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
     price = price + product.price;
  };
  if (price > 300) {
    tax = 0;
  } else {
    tax = price * 0.1;
  };
  total = price + tax;
  return (
    <div>
      <h1>Cart Details</h1>
            <h4> Total Course : {cart.length}</h4>
      <h4> Course Price : ${price}</h4>
      <h4> Tax : ${tax}</h4>
      <h4>Total Price : ${total}</h4>
    </div>
  );
};

export default Cart;