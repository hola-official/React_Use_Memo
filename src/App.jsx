import { useEffect, useState, useCallback } from "react"

function App() {

  const [userInput, setUserInput] = useState("")
  const [result, setResult] = useState(0)
  const [num1] = useState(4)
  const [num2] = useState(5)

  const sum = useCallback(() => num1 + num2, [num1, num2])

  const buildArray = useCallback(() => [num1, num2], [num1, num2])

  useEffect(() => {
    console.log(`New sum. Value: ${buildArray()}`);
    setResult(buildArray())
  }, [buildArray])

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
