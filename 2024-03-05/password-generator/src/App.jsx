import { useState } from 'react';
import './App.css'

const App = () => {
  const [password, setPassword] = useState();

  const rand = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generatePassword = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    for(const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    let letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/';
    
    if(data.numbers) 
      letters += numbers;

    if(data.symbols) 
      letters += symbols;
    
    let result = '';

    for(let i = 0; i < data.length; i++) {
      result += letters[rand(0, letters.length - 1)];
    }

    setPassword(result);
  }

  return (
    <>
      <h1>Password Generator</h1>
      {password &&
        <div className="generatedPassword">
          {password}
        </div>
      }
      <form 
        className="d-flex gap-5 mt-3 align-items-center"
        onSubmit={generatePassword}
      >
        <div>
          <input 
            type="number" 
            defaultValue="20" 
            className="form-control"
            name="length"
          />
        </div>
        <div className="d-flex gap-2">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="numbers"
            name="numbers"
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="d-flex gap-2">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="symbols"
            name="symbols"
          />
          <label htmlFor="symbols">Symbols</label>
        </div>
        <div>
          <button className="btn btn-primary">Generate</button>
        </div>
      </form>
    </>
  )
}

export default App
