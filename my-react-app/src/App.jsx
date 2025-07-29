import { useEffect, useState } from 'react'
import "./App.css";

function App() {

  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(""); // Add date state
  // Note for useState
//1.counter - a variable which at first has a value of 0
//2. setCounter - a function that can change counter  

useEffect( ()=>{
  // typeof is used when you want to find out which datatype is being used
  console.log(typeof(Number(localStorage.getItem("count"))))  
  // the function Number is used to convert from string to number
  // console.log(typeof(localStorage.getItem("count")))
  setCounter(Number(localStorage.getItem("count")))

},[])
// the box brackets are used for the useEffect function to run once when the app is restarted

function handleInc (){
  setDate(new Date().toString())
  localStorage.setItem("count", counter + 1)
  setCounter(counter + 1)
}

function handleDec (){
  localStorage.setItem("count",counter -1)
  setCounter(counter -1)
}

  return (
    <>
       <div className='centerSection'>
         <h1>Counter</h1>
      <div className='counterSection'>
      <button onClick={handleInc}>+</button>
      <h3>{counter}</h3>
      <button onClick={handleDec}>-</button>

      </div>
       </div>
         
         <h3>{Date}</h3>
      
      
    </>
  )
}

export default App
