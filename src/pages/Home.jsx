import React from 'react'

const Home = () => {
  const color = 'green'
  const col = {
    favCol:color
  }

  const demo = {
    color:'orange',
    fontFamily:'chiller',
    fontSize:'100px'
  }
  return (
    <div >
        <h1 className='text-primary'>Home Page</h1>
        {/* 
        CSS in react
        1. inline css This goes as objects
        2. external css
        3. internal css
        4. css module
        */}
        <h2 style={{color:'red'}}>Header 2</h2>
        <h3 style={{color:col.favCol}}>Header 3 {col.favCol}</h3>
        <p style={{color:"fuchsia",fontSize:'50px',fontWeight:'900'}}>Paragraph</p>
        {/* Internal CSs */}
        <h4 style={demo}>Heade Four</h4>
    </div>
  )
}

export default Home