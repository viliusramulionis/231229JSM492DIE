import { useState, useEffect } from 'react';
import Post from '../post/Post';

const Posts = ({ reload }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('data');
        
        if(!localData)
            return;

        setData(JSON.parse(localData));
    }, [reload]);

    return (
        <>
            <h1>Posts</h1>
            <div class="row">
                {data.map((post, index) => 
                    <Post data={post} key={index} />
                )}
            </div>
        </>
    );
}

export default Posts;