import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Administration from './pages/Administration';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';


function App() {


  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile/:id" element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute><Administration /></ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App


