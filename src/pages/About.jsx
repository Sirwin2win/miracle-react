import {useState} from 'react'
import './Style.css'
import styles from './styles.module.css'
import Forms from '../components/forms'
import MultiForm from '../components/MultiForm'

// onclick
const About = () => {
  // useState() hook. immuteable
  // const [name,setName] = React.useState('Mary Doe')
  const [color,setColor] = useState('')
  const [fruits, setFruits] = useState(['Apple','Banana','Cherry'])
  const [stud, setStud] = useState({
    id:1,
    email:'johndoe@gmail.com'
  })
  const handleClick = ()=>{
     return alert('button clicked')    
  }
  const square = (n)=>{
    alert(n**2)
  }
  // const changeColor = ()=>{
  //   setColor
  // }
  //const name1 = "John Doe" // state
  // const handleStud = ()=>{
  //   setStud(prev=>({...prev,favColor:'orange',favColor:'Lime'}))
  // }
  const handleFruits = ()=>{
    setFruits(v=>([...v,'Guava','Pawpaw']))
  }
  return (
    <div>
      <MultiForm />
      <Forms />
      <h1>{fruits}</h1>
      <h1>{stud.email}</h1>
      <h1>{stud.favColor}</h1>
      <h1 id='demo' onClick={handleClick}>Header 1</h1>
      <h1 className={styles.name}>Header 1 second</h1>
      <p>{color}</p>
      <button onClick={()=>square(4)}>Square</button>
      <button onClick={()=>setColor('lime')} style={{backgroundColor:color}}>Red</button>
      {/* <button onClick={handleStud}>Change Stud</button> */}
      <button onClick={handleFruits}>Change Fruits</button>
    </div>
  )
}

export default About