import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import RouterQuiz from './components/RouterQuiz'
import { BrowserRouter } from "react-router";


function App() {

  return (
    <BrowserRouter>
      <RouterQuiz />
    </BrowserRouter>
  )
}

export default App
