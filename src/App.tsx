import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRouter from './routes/UserRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserRouter/>
    </>
  )
}

export default App
