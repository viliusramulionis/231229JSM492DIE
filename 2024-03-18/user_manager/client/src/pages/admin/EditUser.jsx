import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
    const [form, setForm] = useState({});
    const [message, setMessage] = useState();

    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();
    // Reikšmės patalpintos url adrese paėmimas 
    const { id } = useParams();
    
    useEffect(() => {
        // Vartotojo duomenų paėmimas
        // fetch('http://localhost:3000/users/' + id)
        // .then(resp => resp.json())
        // .then(resp => { 
        //     console.log('Pavyko');
        //     // if(resp !== 'Įvyko klaida')
        //         setForm(resp) 
        // })
        // .catch(err => console.log(err)); 

        // AXIOS UŽKLAUSOS FORMAVIMAS
        axios.get('http://localhost:3000/users/' + id)
        .then(resp => setForm(resp.data))
        .catch(err => setMessage(err.response.data));
    }, []);

    // Formos duomenų įrašymas
    const handleSubmit = (e) => {
        e.preventDefault();

        //Vartotojo iššsaugojimas    
        // Būdas persiųsti duomenis JEIGU SIUNČIAMA NUOTRAUKA

        const formData = new FormData(e.target);

        axios.put('http://localhost:3000/users/' + id, formData)
        .then(resp => navigate('/admin'))
        .catch(err => setMessage(err.response.data));
    }

    return (
        <>
            <h1>Vartotojo redagavimas</h1>
            {message && 
                <div className="alert alert-danger">
                    {message}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.name}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Pavardė</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="last_name"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.last_name}
                    /> 
                </div>
                <div className="mb-3">
                    <label>El. paštas</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.email}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Slaptažodis</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.password}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name="photo"
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default EditProduct;