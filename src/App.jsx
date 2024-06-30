import './App.css'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import Home from './components/home'


function App() {

  return (
    <>
      <Home/>
    </>
  )
}

export default App
