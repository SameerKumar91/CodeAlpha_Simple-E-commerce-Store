import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white text-center py-4">
          <p>Copyright &copy; CodeAlpha Shop</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
