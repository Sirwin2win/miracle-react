import React,{useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeContext from '../ThemeContext'
import { BsToggleOn } from "react-icons/bs";
import { FaToggleOff } from "react-icons/fa6";


const Layout = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div style={{backgroundColor:theme}}>
      {theme==='white'? <FaToggleOff  onClick={toggleTheme}/>: <BsToggleOn style={{color:'white'}} onClick={toggleTheme}/>}
      <Header />
       <Outlet />
       <Footer />
    </div>
  )
}

export default Layout