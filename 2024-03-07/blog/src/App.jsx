import { useState } from 'react';
import NewPost from './components/new-post/NewPost';
import Posts from './components/posts/Posts';
import './App.css';

const App = () => {
  const [reload, setReload] = useState(false);

  return (
    <>
      <Posts reload={reload} />
      <NewPost setReload={setReload} />
    </>
  )
}

export default App
