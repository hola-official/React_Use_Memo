import { useEffect, useState, useCallback, useMemo } from "react"

const getArray = () => {
  for(let i = 0; i < 1000000000; i++) {

  }
  return ['Muhammed', 'fineBoy']
}

function App() {

  const [userInput, setUserInput] = useState("")
  const [randomInput, setRandomInput] = useState('')

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n + 2)
  }, [])

  return (
    <main className="App">
      <div className="input">
        <input type="text"
          placeholder="input"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          required
        />
      </div>
      <h1>OutPut: <code> {userInput || "🙂"}</code></h1>
    </main>
  )
}

export default App
