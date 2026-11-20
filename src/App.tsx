import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  function handleNumber(num: string) {
    setIsError(false)
    setDisplay((prev) => (prev === '0' ? num : prev + num))
  }

  function handleOperator(op: string) {
    setIsError(false)
    setFirstNumber(Number(display))
    setOperator(op)
    setDisplay('0')
  }

  function handleEquals() {
    if (firstNumber === null || operator === null) return

    const secondNumber = Number(display)

    if (operator === '/' && secondNumber === 0) {
      setDisplay('Error: Division by zero')
      setIsError(true)
      setFirstNumber(null)
      setOperator(null)
      return
    }

    let result = 0
    if (operator === '+') result = firstNumber + secondNumber
    if (operator === '-') result = firstNumber - secondNumber
    if (operator === '*') result = firstNumber * secondNumber
    if (operator === '/') result = firstNumber / secondNumber

    setDisplay(String(result))
    setFirstNumber(null)
    setOperator(null)
  }

  function handleClear() {
    setIsError(false)
    setDisplay('0')
    setFirstNumber(null)
    setOperator(null)
  }

  return (
    <div className="calculator">
      <div className={`display ${isError ? 'error' : ''}`}>{display}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleOperator('/')}>/</button>
        <button onClick={() => handleOperator('*')}>*</button>
        <button onClick={() => handleOperator('-')}>-</button>

        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button onClick={() => handleOperator('+')}>+</button>

        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button onClick={handleEquals}>=</button>

        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>

        <button onClick={() => handleNumber('0')}>0</button>
        <button onClick={() => handleNumber('.')}>.</button>
      </div>
    </div>
  )
}

export default App