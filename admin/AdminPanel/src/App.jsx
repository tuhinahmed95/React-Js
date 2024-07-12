import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Dashboard from "./admin/pages/Dashboard";
import Main from "./admin/pages/Main";
import ListProduct from "./admin/pages/product/ListProduct";
import AddProduct from "./admin/pages/product/AddProduct";
import EditProduct from "./admin/pages/product/EditProduct";
import DashBoard from "./Pages/DashBoard";


// import './App.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import { TbRouteScan } from 'react-icons/tb'

function App() {
  const { pathname } = useLocation();

  return (
    <div className='grid-container'> 
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/main" element={<Main />} />
          <Route path="/items" element={<AddProduct />} />
          
          <Route path="/itemslist" element={<ListProduct />} />
          <Route path="/itemedit/:id" element={<EditProduct />} />
          <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App
