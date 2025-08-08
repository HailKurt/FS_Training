import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/AuthApi";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { product_id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}products/${product_id}`);
        setProductDetails(response.data);
      } catch (err) {
        console.log(err);
        console.log (`${BASE_URL}products/${product_id}`)
      }
    };
    fetchProductDetails();
  }, [product_id]);

  const increment = () => {
    if (quantity < productDetails.countInStock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={`${BASE_URL}${productDetails.image}`}
          alt="Product"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-2">
          {productDetails.product_name}
        </h1>
        <p className="text-xl text-gray-700 mb-2">$2000</p>
        <p className="text-sm text-gray-600 mb-4">
          Available Stocks:{" "}
          <span className="font-semibold">{productDetails.countInStock}</span>
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={decrement}
            className="w-8 h-8 bg-blue-900 text-white text-lg font-semibold rounded"
          >
            -
          </button>
          <span className="w-10 text-center">{quantity}</span>
          <button
            onClick={increment}
            className="w-8 h-8 bg-blue-900 text-white text-lg font-semibold rounded"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
          Add to cart
        </button>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-sm font-semibold mb-2">Description</h2>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
