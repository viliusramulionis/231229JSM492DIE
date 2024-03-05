import { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        // Duomenų iš localStorage paėmimas
        // Patikrinimas ar negautas null rezultatas
        // Konvertuojami duomenys iš JSON stringo
        // Duomenų priskyrimas prie state'o

        let data = localStorage.getItem('data');
        
        if(!data) 
            return;

        data = JSON.parse(data);
        setProducts(data);
    }, [loading]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for(const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        // Tikrinam ar duomenys jau buvo išsaugoti
        // Jeigu taip, tuomet žinome jog ten patalpinome masyvą
        // Į masyvą galime dėti papildomą produktą
        // Jeigu duomenys nebuvo išssaugoti
        // Kuriame naują masyvą su vienu produktu

        const localData = localStorage.getItem('data');

        if(localData) {
            // Papildymas
            // Veiksmų seka:
            // 1. Konveruojame stringą iš JSON formato
            // 2. Papildome masyvą
            // 3. Konvertuojame masyvą atgal į JSON stringą
            // 4. Išssaugojame stringą localStorage
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData);
        } else {
            // Sukūrimas
            localStorage.setItem('data', JSON.stringify([data]));
        }

        setLoading(!loading);
    }

    return (
        <>
            <h1>Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Photo</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((data, index) => 
                        <tr key={index}>
                            <td>{data.title}</td>
                            <td>
                                <img src={data.photo} style={{
                                    maxWidth: 100
                                }} />
                            </td>
                            <td>{data.price}</td>
                            <td>{data.qty}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <h2>New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Produkto pavadinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto kaina</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Kiekis sandėlyje</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="qty"
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default Products;