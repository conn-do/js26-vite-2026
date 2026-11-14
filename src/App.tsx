import { useState } from "react"
import "./App.css"
import { Title } from "./components/Title"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JS26 Vite</h1>
      <Title text="React" />
      <button onClick={() => setCount(count + 1)}>Count up</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
