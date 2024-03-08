import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import Admin from './pages/admin/Admin';
import NewProduct from './pages/admin/NewProduct';
import './App.css'

const App = () => {
  // CRUD:
  // CREATE
  // READ
  // UPDATE
  // DELETE

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/new-product" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
