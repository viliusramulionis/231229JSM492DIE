const IdButtons = () => {
    const handleClickID = (e, id) => {
        console.log(id);
    }
    
    return (
        <>
            <h2>ID perdavimas</h2>
            <button
                onClick={(e) => handleClickID(e, 1)}
            >
                Pirmas
            </button>
            <button 
                onClick={(e) => handleClickID(e, 2)}
            >
                Antras
            </button>
            <button 
                onClick={(e) => handleClickID(e, 3)}
            >
                Trečias
            </button>
        </>
    )
}

export default IdButtons;