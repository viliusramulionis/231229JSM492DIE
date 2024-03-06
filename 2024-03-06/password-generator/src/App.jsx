import { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [password, setPassword] = useState();
  const [passwordList, setPasswordList] = useState([]);

  useEffect(() => {
    const localPasswords = localStorage.getItem('passwords');
    let data;

    if(localPasswords) {
      //Darome papildymą
      data = JSON.parse(localPasswords);
      if(data.length === 10)
        data.splice(9, 1);

      data.unshift(password);
    } else {
      // Pirmą kartą paleista aplikacija
      data = [password];
    }

    localStorage.setItem('passwords', JSON.stringify(data));

    setPasswordList(data);
  }, [password]);

  const rand = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generatePassword = (e) => {
    e.preventDefault();

    // Formos duomenų paėmimas ir priskyrimas data objektui
    const formData = new FormData(e.target);
    const data = {};

    for(const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    // Reikšmių deklaravimas
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/';
    
    // Jeigu input laukelis numbers pažymėtas, tuomet prie stringo pridedam skaičius
    if(data.numbers) 
      letters += numbers;

    // Tą patį atliekam su simboliais
    if(data.symbols) 
      letters += symbols;
    
    let result = '';

    for(let i = 0; i < data.length; i++) {
      result += letters[rand(0, letters.length - 1)];
    }

    // Galutinį sugeneruotą stringą priskiriame prie state'o
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
      <h2 className="mt-5">Recent password list</h2>
      <ol>
        {passwordList.map((value, index) => <li key={index}>{value}</li>)}
      </ol>
    </>
  )
}

export default App
