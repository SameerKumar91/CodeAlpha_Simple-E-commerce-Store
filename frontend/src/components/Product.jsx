import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover object-center" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 truncate">{product.name}</h3>
        </Link>
        <div className="mt-2 flex items-center">
            <span className="text-yellow-500 font-bold mr-1">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.numReviews} reviews)</span>
        </div>
        <h3 className="text-xl font-bold mt-2 text-gray-900">${product.price}</h3>
      </div>
    </div>
  );
};
export default Product;
