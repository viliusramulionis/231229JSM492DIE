import './Post.css';

const Post = ({ data }) => {
    return (
        <div className="post col-4">
            <div className="image">
                <img src={data.image} alt={data.title} />
            </div>
            <div className="info">
                <span className="category">{data.category}</span>
                <span className="date"></span>
            </div>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <div className="author">
                <div className="authorImage">
                    <img src={data.authorImage} />
                </div>
                <div className="authorInfo">
                    <div className="authorName">{data.author}</div>
                    <div className="authorRole">{data.role}</div>
                </div>
            </div>
        </div>
    );
}

export default Post;