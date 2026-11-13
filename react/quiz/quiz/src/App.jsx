import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='quiz'>
        <h1>React 프로젝트</h1>
        <p>각자 이름</p>
      </div>
    </>
  )
}

export default App
