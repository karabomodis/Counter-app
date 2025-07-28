import { useState } from 'react'
import "./App.css";

function App() {

  const [counter,setCounter]=useState(0)
  // Note for useState
//1.counter - a variable which at first has a value of 0
//2. setCounter - a function that can change counter  

  return (
    <>
       <div className='centerSection'>
         <h1>Counter</h1>
      <div className='counterSection'>
      <button onClick={()=> setCounter(counter +1)}>+</button>
      <h3>{counter}</h3>
      <button onClick={()=> setCounter(counter -1)}>-</button>

      </div>
       </div>
         
      
      
    </>
  )
}

export default App
