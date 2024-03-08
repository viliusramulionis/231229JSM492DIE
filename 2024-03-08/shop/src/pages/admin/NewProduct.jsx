const NewProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for(const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        const localData = localStorage.getItem('data');

        if(localData) {
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData);
        } else {
            localStorage.setItem('data', JSON.stringify([data]));
        }

    }

    return (
        <>
            <h1>New Product</h1>
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

export default NewProduct;