import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={style.newPost}>
            <div className={style.modal}>
                <h2>Create new post</h2>
                <form>
                    <div className="mb-3">
                        <input 
                            type="file" 
                            name="photo" 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <textarea 
                            className="form-control"
                            name="description"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default NewPost;