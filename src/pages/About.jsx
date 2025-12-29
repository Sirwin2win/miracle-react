import React from 'react'
import './Style.css'
import styles from './styles.module.css'

// onclick
const About = () => {
  const handleClick = ()=>{
    // return alert('button clicked')
    console.log('you clicked me!')
  }
  return (
    <div>
      <h1 id='demo' onClick={handleClick}>Header 1</h1>
      <h1 className={styles.name}>Header 1 second</h1>
    </div>
  )
}

export default About