import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './page/Home/Home';
import Report from './container/Report/Report';
import Chat from './components/Message/Chat';
import Login from './components/Login/Login';
import RentProducts from './container/Rent/RentProducts';
import ShoppingCart from './container/Shopping Cart/ShoppingCart';
import OrderHistory from './container/OrderHistory/OrderHistory';
import HomePage from './components/Home Page/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/> 
        <Route path="login" element={<Login/>}/>
        <Route path="report" element={<Report />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="chat" element={<Chat />} />
        <Route path="rent" element={<RentProducts />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="orderhistory" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
