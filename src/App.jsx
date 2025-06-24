import { useState } from 'react'
import DraggeableBox from './components/DraggeableBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DraggeableBox/>
    </>
  )
}

export default App
