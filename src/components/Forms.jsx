import React,{useState} from 'react'

const Forms = () => {
    const [name, setName] = useState('')

    const handleChange = (e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <h1>Input Values</h1>
        <form>
            <input type="text" value={name} onChange={handleChange} />
            <p>{name}</p>
        </form>
    </div>
  )
}

export default Forms