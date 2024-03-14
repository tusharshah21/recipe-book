import { useState } from 'react'
import './App.css'
import Recipe from "./sections/recipe.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Recipe/>
      </div>
    </>
  )
}

export default App
