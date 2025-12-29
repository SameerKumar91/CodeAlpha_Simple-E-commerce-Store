import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => { navigate('/login?redirect=shipping'); };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (<div className="bg-blue-100 p-4 rounded text-blue-800">Your cart is empty. <Link to="/" className="underline font-bold">Go Back</Link></div>) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded shadow-sm border">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <Link to={`/product/${item._id}`} className="text-lg font-bold text-gray-800 hover:text-blue-600 flex-1 ml-4">{item.name}</Link>
                <div className="text-lg font-semibold w-24">${item.price}</div>
                <select value={item.qty} onChange={(e) => addToCart(item, Number(e.target.value))} className="border rounded p-1 mx-2">{[...Array(item.countInStock).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}</select>
                <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="md:col-span-1">
        <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4 border-b pb-4">Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
            <div className="text-2xl font-bold mb-6">${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</div>
            <button onClick={checkoutHandler} className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition uppercase font-bold disabled:bg-gray-400" disabled={cartItems.length === 0}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
