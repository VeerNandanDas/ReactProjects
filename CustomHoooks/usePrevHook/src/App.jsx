
import { useState } from 'react'
import { usePrev } from './hooks/usePrev';
function App() {

  const [counter,setCounter] = useState(0);
  const prev = usePrev(counter);


  function Increment(){
    setCounter(counter + 1);
  }


  return (
    <>
      <h1>Current value is : {counter}</h1>
      <button onClick={Increment}>Click me </button>
      <h2>Prev value is : {prev}</h2>
    </>    
  )
}

export default App
