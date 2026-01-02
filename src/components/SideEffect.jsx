import {useState,useEffect, useContext} from 'react'
import { FaRegStar,FaEye  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

const SideEffect = ({info,data,foo, obj}) => {
    // useEffect is used to handle Link side effect in our programe e.g external apis
    // useState is used to manage state(data) variable within our component
    const [products, setProducts] = useState([])
     const {theme, toggleTheme} = useContext(ThemeContext)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json))
    },[])
    // console.log(products)
  return (
    <div className='container'>
      <h1 style={{color:theme==='white'?'black':'white'}}>{info}</h1>
      <h1 style={{color:theme==='white'?'black':'white'}}>{data}</h1>
      <h1 style={{color:theme==='white'?'black':'white'}}>{foo}</h1>
      <h1 style={{color:theme==='white'?'black':'white'}}>{obj.email}</h1>
       <div className="row">
      {products.map((product=>(
        <div className='col-sm-4 mb-5' key={product.id}>
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
    <Link to={`/product/${product.id}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
      )))}
       </div>
    </div>
  )
}

export default SideEffect