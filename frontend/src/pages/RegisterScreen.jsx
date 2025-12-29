import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const { register, user, error } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => { if (user) { navigate(redirect); } }, [navigate, user, redirect]);
  const submitHandler = (e) => { e.preventDefault(); if (password !== confirmPassword) { setMessage('Passwords do not match'); } else { register(name, email, password); } };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {message && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{message}</div>}
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
        <form onSubmit={submitHandler}>
          <div className="mb-4"><label className="block text-gray-700 font-bold mb-2">Name</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" /></div>
          <div className="mb-4"><label className="block text-gray-700 font-bold mb-2">Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" /></div>
          <div className="mb-4"><label className="block text-gray-700 font-bold mb-2">Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" /></div>
          <div className="mb-6"><label className="block text-gray-700 font-bold mb-2">Confirm Password</label><input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" /></div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-bold">Register</button>
        </form>
        <div className="mt-4 text-center">Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} className="text-blue-600 hover:underline">Login</Link></div>
      </div>
    </div>
  );
};
export default RegisterScreen;
