import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(1)
  let multipliedValue= value*5

  const multiplybyfive = ()=>{
    setValue(value+1)
  }

  return (
    <>
      <h1>Main value:{value}</h1>
      <button
      onClick={multiplybyfive}
      >Click to multiply by 5</button>
      <h2>Multiplied Value:{multipliedValue}</h2>
    </>
  ) 
}

export default App
