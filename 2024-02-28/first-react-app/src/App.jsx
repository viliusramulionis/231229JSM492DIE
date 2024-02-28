import './App.css';
import logo from './assets/react.svg';
import Button from './components/button/Button.jsx';

// Komponentas (Component)
const App = () => {
  // Grąžinamas turinys iš komponento
  // JSX sintaksė
  // Kiekvienas komponenetas privalo grąžinti tik vieną JSX elementą
  // <></> yra fragmentas (fragment)

  return (
    <>
      <img src={logo} />
      <h1>Hello World</h1>
      <h2>How are you?</h2>
      <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate placeat, qui reprehenderit sequi assumenda corrupti dolor eum labore nisi.</p>
      <Button />
    </>
  ); 
}

export default App;
