import React, { useState } from 'react';
import  { courseDetails } from '../../components/courseDetails.js';
import Product from '../Product/Product.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
  const [count, setCount] = useState([]);
  function HandleEnroll (id){
    console.log('object');
    // const matchedProduct = courseDetails.map(pd => pd.find(pd.id === id));
    // console.log(matchedProduct);
  };
  return (
    <div>
      <h1 style={{textAlign: 'center', color: 'red'}}> Hungry Online Academy</h1>
      <br /><br />
      <Container>
        <Row>
          <Col sm={8}>
              <h1> Our Product Details </h1>
              {
                courseDetails.map( data => <Product data={data} HandleEnroll={ ()=>HandleEnroll(data.id)} count={count} setCount={setCount}></Product>)
              }  
          </Col>

          <Col sm={4}>
            <h1>Cart Details</h1>
            <h4> Total Course : {count.length}</h4>
            <h4> Course Price : $</h4>
            <h4> Tax : $</h4>
            <h4>Total Price : $</h4>
          </Col>

        </Row>
      </Container>

    </div>
  );
};

export default Home;