import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [form, setForm] = useState({});

    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();
    const { indentifikatorius } = useParams();

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('data'));

        if(!localData)
            return;

        setForm(localData[indentifikatorius]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for(const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        // 1. Paimame duomenis iš localStorage
        // 2. Konvertuojam duomenis
        // 3. Redaguojame duomenis
        // 4. Konvertuojame duomenis iš naujos
        // 5. Išsaugojame duomenis
        const localData = JSON.parse(localStorage.getItem('data'));
        localData[indentifikatorius] = data;
        localStorage.setItem('data', JSON.stringify(localData));

        // Peradresavimo iniciavimas
        navigate('/admin');
    }

    return (
        <>
            <h1>Produkto redagavimas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Produkto pavadinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                        defaultValue={form.title}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                        defaultValue={form.photo}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto kaina</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        defaultValue={form.price}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Kiekis sandėlyje</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="qty"
                        defaultValue={form.qty}
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default EditProduct;