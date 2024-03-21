import { useState } from 'react';
import Comments from '../comments/Comments.jsx';
import style from './Post.module.css';

const Post = ({ data }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className={style.post}>
            <div className={style.user}>
                <div className={style.userPhoto}>
                    <img src={'http://localhost:3000/uploads/' + data.author.photo} />
                </div>
                <div className={style.userName}>{data.author.user_name}</div>
            </div>
            <div className={style.photo}>
                <img src={'http://localhost:3000/uploads/' + data.photo} />
            </div>
            <div className={style.description}>
                <strong className={style.userName}>
                    {data.author.user_name}
                </strong>
                {data.description}
            </div>
            <div 
                className={style.commentsLink}
                onClick={() => setShowComments(true)}
            >
                <span>View All Comments</span>
            </div>
            {showComments && 
                <Comments 
                    data={data}
                    setShowComments={setShowComments} 
                />
            }
        </div>    
    );
}

export default Post;