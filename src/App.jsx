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
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, [])

  const fibNumber = useMemo(() => fib(userInput), [userInput, fib]);

  const myArray = useMemo(() => getArray(), [])

  useEffect(() => {
    console.log('New Array');
  }, [myArray])

  return (
    <main className="App">
        <label>Fibonacci Sequence:</label>
        <input type="text"
          placeholder="position"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          required
        />
        <p>Number: <code>{fibNumber || '😁'}</code></p>
        <br />
        <br />
        <label>Random Input:</label>
     <input type="text" 
     required
     value={randomInput}
     placeholder="type anything"
     onChange={e=>setRandomInput(e.target.value)}
     />
     <p>Result: <code>{randomInput || '...'}</code></p>
    </main>
  )
}

export default App
