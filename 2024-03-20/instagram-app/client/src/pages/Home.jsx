import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/post/Post.jsx';

const Home = ({ showNewPost }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts/')
        .then(resp => setData(resp.data));
    }, [showNewPost]);

    return (
        <>
            <h1>Streamas</h1>
            {data.map(post => 
                <Post data={post} key={post._id} />
            )}
        </>
    );
}

export default Home;