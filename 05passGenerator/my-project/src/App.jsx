import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState('')

 
  // Define the password generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character])

  // Trigger password generation on initial render or when length/checkboxes change
  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  const handleSliderChange = (event) => {
    setLength(event.target.value)
  }

  const handleNumberCheckbox = () => {
    setNumber(!number)
  }

  const handleCharacterCheckbox = () => {
    setCharacter(!character)
  }

  const passwordRef=useRef(null)
  const copyToClipboard = () => {
    passwordRef.current?.select()
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Password copied to clipboard!')
      })
      .catch(() => {
        alert('Failed to copy password.')
      })
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder="Generated password"
            readOnly
          />
          <button 
            className='text-white bg-sky-500 w-100 px-4' 
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>

        <label className='p-2'>
          <input
            type='range'
            min='8'
            max='100'
            value={length}
            onChange={handleSliderChange}
          />
          Length: {length}
        </label>
        

        <input 
          type="checkbox" 
          id="numberCheckbox" 
          checked={number} 
          onChange={handleNumberCheckbox} 
        />
        <label className='p-2' htmlFor="numberCheckbox">Numbers</label>
       

        <input 
          type="checkbox" 
          id="characterCheckbox" 
          checked={character} 
          onChange={handleCharacterCheckbox} 
        />
        <label className='p-2' htmlFor="characterCheckbox">Characters</label>
      </div>
    </>
  )
}

export default App
