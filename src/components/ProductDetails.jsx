import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetails() {
  let { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});


  useEffect(() => { 
     axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => {
         console.log(res.data);
      setProduct(res.data);
    })
}, [])
  return (
    <>
    
      <h1>Product Details</h1>
           <img className="imgElement" src={product.image}/>
           <h3>{product.title}</h3>
           <p>Rs.{product.price}/-</p>
    </>
  )
}

export default ProductDetails
