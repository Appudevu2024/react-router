import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Products(props){
    
    return(
        <div>
          
           <img  src={props.product.image} className='productImage'/>
           <p className='productTitle'>{props.product.title}</p>
           <p className='productPitle'> Price :Rs. {props.product.price} /-</p>
           <Link to={`/product/${props.product.id}`}>
           <div className='viewButton'>
            <Button className='mb-2'>View Product</Button>
            </div> 
           </Link>
          
        </div>

    )
}
export default Products