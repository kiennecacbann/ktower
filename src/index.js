import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './page/Home/Home';
import Report from './container/Report/Report';
import Chat from './container/Message/Chat';
import Login from './container/Login/Login';
import RentProducts from './container/Rent/RentProducts';
import ShoppingCart from './container/ShoppingCart/ShoppingCart';
import OrderHistory from './container/OrderHistory/OrderHistory';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Profile from './components/Profile/Profile';
import Bill from './container/Bill/Bill';
import ForgotPassword from './container/ForgotPassword/ForgotPassword';
import Contact from './components/Contact/Contact';
import CreateBlog from './container/Blog/CreateBlog';
import Post from './container/Blog/Blog';
import Error from './container/Error/Error404';
import Error500 from './container/Error/Error500';
import ForgotPassword2 from './container/ForgotPassword/ForgotPassword2';
import ProductDetail from './components/ProductDetail/ProductDetail';
import App from './App';
import Blogs from './container/Blog/Blogs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<App />} />
        <Route path='home' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="report" element={<Report />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="chat" element={<Chat />} />
        <Route path="rent" element={<RentProducts />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="orderhistory" element={<OrderHistory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="fgpw" element={<ForgotPassword />} />
        <Route path="fgpw2" element={<ForgotPassword2 />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bill" element={<Bill />} />
        <Route path="createblog" element={<CreateBlog />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="post" element={<Post />} />
        <Route path="error" element={<Error />} />
        <Route path="error500" element={<Error500 />} />
        <Route path="detail" element={<ProductDetail />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
