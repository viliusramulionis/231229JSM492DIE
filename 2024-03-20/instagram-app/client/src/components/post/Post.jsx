import './Post.css';

const Post = ({ data }) => {
    return (
        <div className="post">
            <div className="user">
                <div className="user-photo">
                    <img src={'http://localhost:3000/uploads/' + data.author.photo} />
                </div>
                <div className="user-name">{data.author.user_name}</div>
            </div>
            <div className="photo">
                <img src={'http://localhost:3000/uploads/' + data.photo} />
            </div>
            <div className="description">
                <div className="user-name">{data.author.user_name}</div>
                <div className="description-text">{data.description}</div>
            </div>
        </div>    
    );
}

export default Post;