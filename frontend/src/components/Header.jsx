import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaCaretDown } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold tracking-wider hover:text-gray-300">CODEALPHA SHOP</Link>
        <nav className="flex space-x-6 items-center">
          <Link to="/cart" className="flex items-center hover:text-gray-300 relative">
            <FaShoppingCart className="mr-1 text-xl" /> Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-xs font-bold px-2 py-0.5 rounded-full">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
            )}
          </Link>
          {user ? (
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center hover:text-gray-300 focus:outline-none"><FaUser className="mr-1" /> {user.name} <FaCaretDown className="ml-1" /></button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800 z-50">
                  <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Profile</Link>
                  <button onClick={() => { logout(); setDropdownOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="flex items-center hover:text-gray-300"><FaUser className="mr-1" /> Sign In</Link>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
