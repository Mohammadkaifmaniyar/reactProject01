import { useState, useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const refPassword = useRef(null)

  const passwordGenerator=()=>{
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let nums = "0123456789"
    let chars = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~"
    
    if(numberAllowed) str+=nums;
    if(charAllowed) str+=chars;
    
    let pass=""
     for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    
    setPassword(pass)   
    
  }

  const copyPassword= ()=>{
    window.navigator.clipboard.writeText(password)
    refPassword.current.select()

  }
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])

  return (
   <>
      <div className='flex items-center justify-center h-screen'>
      <h1  className='mx-12 '>Password Generator</h1>
      <div className='bg-black text-white rounded-xl mx-12 py-12 '>
      <input type="text" className='mx-12 rounded-xl p-2' value={password} ref= {refPassword}/>
      <button className='mx-6' onClick={copyPassword}>Copy</button>
      <br />      
      <input type='range' className='mx-6' value={length} min={8} max={20}  onChange={(e)=>{setLength(e.target.value)}}/> length {length}
      <input type="checkbox" value={numberAllowed} name="numberAllowed"  onChange={()=>{setNumberAllowed(prev=>!prev)}}/> Number
      <input type="checkbox" value={numberAllowed} name="charAllowed" id="" onChange={()=>{setCharAllowed(prev=>!prev)}}/> Character
      </div>
      </div>
   
   </>
  )
}

export default App
