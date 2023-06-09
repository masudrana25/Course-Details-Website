import React from 'react';
import { Button } from 'react-bootstrap';

const Product = (props) => {
  const { id, title, instructor, price } = props.data;
  const HandleEnroll = props.HandleEnroll
  return (
  
    <div style={{border: '2px solid red', borderRadius:'15px',margin:'10px',padding:'15px'}}>
          <h2>Product No: {id}</h2>
          <h3>Product Title : {title}</h3>
          <h4>Instructor : {instructor}</h4>
          <p>Price : ${price}</p>
          <Button variant="primary" onClick={()=>HandleEnroll(id)}> Enroll Now</Button>
    </div>

  );
};

export default Product;