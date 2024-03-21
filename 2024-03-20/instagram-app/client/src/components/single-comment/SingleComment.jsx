import style from './SingleComment.module.css';

const SingleComment = ({ data }) => {
    return (
        <div className={style.comment}>
            <div className={style.userPhoto}>
                <img src={'http://localhost:3000/uploads/' + data.author.photo} />
            </div>
            <div>
                <div className={style.content}>
                    <strong>{data.author.user_name}</strong>
                    <span>{data.text}</span>
                </div>
                <div className={style.commentDate}>
                    {new Date(data.created_at).toLocaleDateString()}
                </div>
            </div>
        </div>
    )
} 

export default SingleComment;