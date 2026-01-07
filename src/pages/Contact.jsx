import React,{useRef,useReducer, useCallback,useState} from 'react'

const Contact = () => {
  const countRef = useRef(0)
  const inputRef = useRef('')
  const [num, setNum] = useState(0)


  const initialState = {count:0}
  const [state,dispatch] = useReducer(reducer, initialState)
  function reducer(state,action){
    switch(action.type){
      case 'increment':
        return {count:state.count +1};
      case 'decrement':
        return {count:state.count -1};
      case 'reset':
        return {count:state.count = 0};
      default:
        return 'No match found'
    }
  }
  /*
const car ={
  name:'Toyota'  // car.name
}
const countRef = {
  current:0 ,// countRef.current
}

useReducer hook is used to manage complex state logic
const [state,dispatch] = useReducer(reducer, initialState)
1. reducer is a function that takes current state and action and returns a new state. It is 
responsible for state update
2. initialState is the starting state value
3. state is the current state 
4. dispatch is a function used to send an action object to the reducer to update the state

useCallback hook
This is used to cache or memoize a function(usually with an expensive logic), returning the 
same instance across re-renders unless its dependency array values changes

useMemo hook
This returns a memoized(cached) value of an expensive logic or program
  */

// useRef function for increment
 function increment(){
  countRef.current++;
  console.log(countRef)
 }

 // uuseRef function for actual DOM interaction
 function handleInput(){
  inputRef.current.focus()
  // console.log(countRef)
 }

 // useCallback logic
 const handleClick = useCallback(()=>{
  setNum((prevNum)=>prevNum +1)
 },[num])
  return (
    <div>
      <p>{countRef.current}</p>
      <p>{num }</p>
      <input type="text" ref={inputRef}/>
      <button onClick={increment}>Increment</button>
      <button onClick={handleInput}>handleInput</button>
      <button onClick={handleClick}>useCallback Button</button>

      <h1>Reducer State: {state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
      <button onClick={()=>dispatch({type:'reset'})}>clear</button>
    </div>
  )
}

export default Contact