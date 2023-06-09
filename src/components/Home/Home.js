import React, { useState } from 'react';
import  { courseDetails } from '../../components/courseDetails.js';
import Product from '../Product/Product.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cart from '../Cart/Cart.js';
const Home = () => {
  const [cart, setCart] = useState([]);
  const HandleEnroll = (id) => {
    const matchedCourse = courseDetails.find(pd => pd.id === id);
    const isAvailable = cart?.find( pd => pd.id === matchedCourse.id)
    if (cart && !isAvailable) {
      const Course = [...cart, matchedCourse];
      setCart(Course);
    };
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
                courseDetails.map( data => <Product data={data} key={data.id} HandleEnroll={HandleEnroll}></Product>)
            }  
          </Col>

          <Col sm={4}>
            <Cart cart ={cart}></Cart>
          </Col>

        </Row>
      </Container>

    </div>
  );
};

export default Home;