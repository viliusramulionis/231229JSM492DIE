import { useState } from 'react';

const Input = () => {
    // State'o suskūrimas
    const [fieldValue, setFieldValue] = useState();

    // Event'o funkcijos registracija
    const handleChange = (e) => {
        // Laukelyje įvestos reikšmės priskyrimas prie state'o ir komponento atnaujinimas
        setFieldValue(e.target.value);
    }

    return (
        <>
            <h2>Laukelio reikšmė</h2>

            <input 
                type="text" 
                onChange={handleChange} 
            />
            <div>{fieldValue}</div>
        </>
    );
}

export default Input;