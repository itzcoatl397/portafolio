import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import Navegacion from './components/Navegacion'
import { CardMe } from './components/CardMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
     <CardMe/>
    </div>
  )
}

export default App
