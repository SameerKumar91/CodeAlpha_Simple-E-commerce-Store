import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    addToCart(product, Number(qty));
    navigate('/cart');
  };

  if (!product.name) return <div className="p-10">Loading...</div>;

  return (
    <>
      <Link className="inline-block mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition" to="/">&larr; Go Back</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="md:col-span-2"><img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" /></div>
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
          <p className="text-xl font-bold">Price: ${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
        <div className="md:col-span-1">
          <div className="border border-gray-200 rounded-lg p-6 shadow-md bg-white">
            <div className="flex justify-between items-center mb-4 pb-4 border-b"><span className="text-gray-600">Price:</span><span className="font-bold text-lg">${product.price}</span></div>
            <div className="flex justify-between items-center mb-4 pb-4 border-b"><span className="text-gray-600">Status:</span><span className={product.countInStock > 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span></div>
            {product.countInStock > 0 && (
              <div className="flex justify-between items-center mb-6 pb-4 border-b">
                <span className="text-gray-600">Qty:</span>
                <select value={qty} onChange={(e) => setQty(e.target.value)} className="border rounded p-1 w-16">{[...Array(product.countInStock).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}</select>
              </div>
            )}
            <button onClick={addToCartHandler} className={`w-full py-3 px-4 rounded text-white font-bold uppercase tracking-wide transition ${product.countInStock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`} disabled={product.countInStock === 0}>{product.countInStock === 0 ? 'Out of Stock' : 'Add To Cart'}</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductScreen;
