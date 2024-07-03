import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Admin/components/Sidebar';
import ContentPage from './Admin/Pages/ContentPage';


const App = () => {
  return (
    <div>
      <BrowserRouter> 
      <Sidebar />
      <ContentPage />
        <Routes> 
            <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;