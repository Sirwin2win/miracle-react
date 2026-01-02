import React from 'react'
import SideEffect from '../components/SideEffect'

const Products = () => {
  // const greet = function(n){
  //   alert("Happy New Year "+n)
  // }
  const name = "John Doe"
  const fruits = ["Apple","Banana","Cherry"]
  const person = {
    email:'joeldoe@gmail.com'
  }
  return (
    <div>
        <h1 className='text-center text-primary my-5'>New Arrivals</h1> 
        {/* <button onClick={()=>greet("Miracle")}>Click</button> */}
        <SideEffect info={name} data="Mary Doe" foo={fruits} obj={person} />
    </div>
  )
}

export default Products