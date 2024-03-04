import { useState } from 'react';
import './App.css';

const App = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [action, setAction] = useState();
  const [result, setResult] = useState();

  const handleDigit = (e) => {
    if(typeof action === 'undefined') {
      setFirst(first + e.target.textContent);
    } else {
      setSecond(second + e.target.textContent);
    }
  }

  const handleAction = (e) => {
    setAction(e.target.textContent);
  }

  const handleResult = (e) => {
    if(typeof first !== 'string' || 
       typeof second !== 'string' ||
       typeof action === 'undefined'
      ) 
      return;

    if(action === '+') {
      setResult(first + second);
    } 
    
    if(action === '-') {
      setResult(first - second);
    } 

    if(action === '*') {
      setResult(first * second);
    }
  
    if(action === '/') {
      setResult(first / second);
    }
  }
  
  return (
    <>
      <h1>Calculator</h1>
      <div className="result">{first} {action} {second} = {result}</div>
      <div className="digits">
        <button onClick={handleDigit}>0</button>
        <button onClick={handleDigit}>1</button>
        <button onClick={handleDigit}>2</button>
        <button onClick={handleDigit}>3</button>
        <button onClick={handleDigit}>4</button>
        <button onClick={handleDigit}>5</button>
        <button onClick={handleDigit}>6</button>
        <button onClick={handleDigit}>7</button>
        <button onClick={handleDigit}>8</button>
        <button onClick={handleDigit}>9</button>
      </div>
      <div className="actions">
        <button onClick={handleAction}>+</button>
        <button onClick={handleAction}>-</button>
        <button onClick={handleAction}>*</button>
        <button onClick={handleAction}>/</button>
      </div>
      <div className="calculate">
        <button onClick={handleResult}>=</button>
      </div>
    </>
  )
}

export default App
