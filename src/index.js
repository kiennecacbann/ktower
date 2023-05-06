import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './page/Home/Home';
import Report from './container/Report/Report';
import Chat from './components/Message/Chat';
import Login from './components/Login/Login';
import RentProducts from './container/Rent/RentProducts.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/> 
        <Route path="login" element={<Login/>}>
        </Route>
        <Route path="report" element={<Report />} />
        <Route path="chat" element={<Chat />} />
        <Route path="rent" element={<RentProducts />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
