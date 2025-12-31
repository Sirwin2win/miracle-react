import {useState,useEffect} from 'react'
import { FaRegStar,FaEye  } from "react-icons/fa";

const SideEffect = () => {
    // useEffect is used to handle a side effect in our programe e.g external apis
    // useState is used to manage state(data) variable within our component
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json))
    },[])
    // console.log(products)
  return (
    <div className='container'>
       <div className="row">
      {products.map((product=>(
        <div className='col-sm-4 mb-5'>
          <div className="card" style={{width: '18rem'}}>
  <img src={product.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">${product.price}</p>
    <div className="row">
      <div className="col-sm-6"> <FaRegStar className='text-warning' /> {product.rating.rate}</div>
      <div className="col-sm-6"><FaEye className='text-danger'/> {product.rating.count}</div>
    </div>
    
    <br />
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
      )))}
       </div>
    </div>
  )
}

export default SideEffect