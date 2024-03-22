import { useContext } from 'react';
import MainContext from '../../context/Main.jsx';

const C = () => {
    const { setShow } = useContext(MainContext);
    return (
        <>
            <h2>C Komponentas</h2>
            <button 
                onClick={() => setShow(true)}
            >Paspausk mane</button>
        </>
    )
}

export default C;