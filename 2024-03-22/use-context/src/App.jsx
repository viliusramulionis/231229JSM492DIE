import './App.css'
import A from './components/a/A.jsx';
import { useState } from 'react';
import MainContext from './context/Main.jsx';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <MainContext.Provider value={{ setShow }}>
        <A />
        {show && 'Labas Pasauli'}
      </MainContext.Provider>
    </>
  )
}

export default App
