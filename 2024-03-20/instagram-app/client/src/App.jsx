import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import NewPost from './components/new-post/NewPost.jsx';
import './App.css'

const App = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  
  return (
    <>
      <BrowserRouter>
        {/* Tikriname ar showNewPost reikšmė teigiama, jei taip atvaizduojame NewPost komponento modalinį langą */}
        {showNewPost && 
          <NewPost 
            setShowNewPost={setShowNewPost} 
          />
        }
        <Sidebar 
          setShowNewPost={setShowNewPost} 
        />
        <Routes>
          <Route 
            path="/" 
            element={<Home showNewPost={showNewPost} />} 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/user/:id" 
            element={<User />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
