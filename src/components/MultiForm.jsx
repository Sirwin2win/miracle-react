import {useState} from 'react'

const MultiForm = () => {
    const [inputs,setInputs] = useState({
        name:'',
        email:'',
        phone:''
    })
    // const data = 'Miracle'

    // const user = {
    //     data:'Happy New Year'
    // }
    // console.log(user)

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
    setInputs(prev=>({...prev,[name]:value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`${inputs.name}, ${inputs.email},${inputs.phone}`)
    }
  return (
    <div>
        <h1>Multiple Input</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={inputs.name} onChange={handleChange}/>
            <input type="text" name='email' value={inputs.email} onChange={handleChange}/>
            <input type="text" name='phone' value={inputs.phone} onChange={handleChange}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default MultiForm