import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Products from './pages/Products'
import ProductDetail from './components/ProductDetail'
import ThemeContext from './ThemeContext'



const App = () => {
  const [theme, setTheme] = useState('white')

  const toggleTheme = function(){
    setTheme((prev)=>{
      return theme=='white'?'black':'white'
    })
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about'  element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      </Route> 
    </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App