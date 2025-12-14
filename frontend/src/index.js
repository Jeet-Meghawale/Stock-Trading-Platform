import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './landing page/home/HomePage';
import SignupPage from './landing page/signup/SignupPage';
import LoginPage from "./landing page/signup/LoginPage";
import AboutPage from './landing page/about/AboutPage';
import ProductPage from './landing page/products/ProductPage'
import PricingPage from './landing page/pricing/PricingPage';
import SupportPage from './landing page/support/SupportPage';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';
import Notfound from './landing page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
