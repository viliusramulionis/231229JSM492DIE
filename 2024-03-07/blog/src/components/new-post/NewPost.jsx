const NewPost = ({ setReload }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for(const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        const localData = localStorage.getItem('data');

        if(localData) {
            // Papildymas
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData);
        } else {
            // Sukūrimas
            localStorage.setItem('data', JSON.stringify([data]));
        }

        setReload(prev => !prev);
    }

    return(
        <>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Post Title</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="title"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label>Post Category</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="category"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label>Post Image</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="image"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label>Post Author</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="author"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label>Post Content</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="content"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label>Post Author Role</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="role"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label>Post Author Image</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="authorImage"
                        required={true}
                    />
                </div>
                <div>
                    <button className="btn btn-warning">Submit</button>
                </div>
            </form>
        </>
    );
}

export default NewPost;