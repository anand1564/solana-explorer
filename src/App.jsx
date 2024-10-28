import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-custom-bg min-h-screen w-full">
      <h1 className='text-center font-sans text-xl'>Hello World</h1>
    </div>
  )
}

export default App
