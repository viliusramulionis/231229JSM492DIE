import { useState, useEffect } from 'react';
import Products from './components/products/Products';
import './App.css'

function App() {
  const [value, setValue] = useState();

  useEffect(() => {
    // Informacijos paėmimas iš localStorage vos tik užsikrovus komponentui
    setValue(localStorage.getItem('text'));
  }, []);

  const setLocalValue = (e) => {
    // Informacijos talpinimas į lokalų podėlį (localStorage)

    localStorage.setItem('text', 'Hello World');
  }

  const getLocalValue = (e) => {
    setValue(localStorage.getItem('text'));
  }

  return (
    <>
      <h1>Local Storage</h1>
      <div className="my-3">{value}</div>
      <button 
        className="btn btn-primary"
        onClick={setLocalValue}
      >
        Set Local Value
      </button>
      <button 
        className="btn btn-primary"
        onClick={getLocalValue}
      >
        Get Local Value
      </button>
      {/* Produktų komponentas */}
      <Products />
    </>
  )
}

export default App
