import React, { useState, useEffect } from 'react';
import './css/Appnew.css';
import Products from './components/Products';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    // fetch('https://fakestoreapi.com/products/')
    //         .then(res=>res.json())
    //         .then(json=>{
    //           console.log(json)
    //           setProducts(json)

    //         })

    axios.get('https://fakestoreapi.com/products/')
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
  }, [])




  return (
    <>

      <h2 style={{margin:"0 20px 10px"}}>Products</h2>
      <div className='productsContainer'>
       
          {products.map((product, index) => {
            return (
              <div className='productItem'>
                <Products product={product} key={index} />

              </div>

            )
          })}
        
      </div>

    </>
  )
}

export default App
