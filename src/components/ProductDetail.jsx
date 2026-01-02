import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { FaRegStar,FaEye  } from "react-icons/fa";


const ProductDetail = () => {
    const [product, setProduct] = useState(0)
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> setProduct(json))
    },[])
    if(!product){
        return <h1>No product found</h1>
    }
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="col-sm-5">
                <img src={product.image} alt='' style={{width:'450px',height:'400px'}} />
            </div>
            <div className="col-sm-7 mt-5">
                <h5 className='text-primary'>{product.title}</h5>
                <p className='my-3'>{product.description}</p>
                <span className="badge rounded-pill text-bg-danger">${product.price}</span>
                <div className="row">
                      <div className="col-sm-6"> <FaRegStar className='text-warning' /> {product.rating.rate}</div>
                      <div className="col-sm-6"><FaEye className='text-danger'/> {product.rating.count}</div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail