import { useState } from 'react'

import './App.css'

import TimeToHours from "./components/TimeToHours";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimeToHours/>
    </>
  )
}

export default App
