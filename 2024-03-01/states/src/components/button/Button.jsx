import { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);

    // console.log('Button Komponentas uždėtas');

    const handleClick = () => {
        // Naujos count reikšmės priskyrimas
        // Pirmas būdas
        setCount(count + 1);
        // Antras būdas
        // setCount(priesTaiBuvusiCountReiksme => priesTaiBuvusiCountReiksme + 1)
        // setCount(prev => prev + 1);
    }

    return (
        <>
            <h2>Mygtuko paspaudimai</h2>

            <div>Rezultatas: {count}</div>
            <button 
                onClick={handleClick}
            >
                Paspausk mane
            </button>
        </>
    )
}

export default Button;