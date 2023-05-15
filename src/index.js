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
import AboutUs from './components/About Us/AboutUs';
import Profile from './components/Profile/Profile';
import Bill from './container/Bill/Bill';
import ForgotPassword from './container/Forgot Password/ForgotPassword';
import Contact from './components/Contact/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='home' index element={<Home/>}/> 
        <Route path="login" element={<Login/>}/>
        <Route path="report" element={<Report />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="chat" element={<Chat />} />
        <Route path="rent" element={<RentProducts />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="orderhistory" element={<OrderHistory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="fgpw" element={<ForgotPassword />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bill" element={<Bill />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
