import { useState, useEffect } from "react";
import SwitchImg from "../assets/product_img/1.png";
import Loading from "../components/Loading";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation().pathname;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/products/");
        setProducts(response.data);
        console.log(location);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
        PRODUCT LIST
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* added conditional here  */}
        {(location == "/" ? products.slice(0, 6) : products).map((p) => (
          <div
            key={p.product_id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
          >
            <Link to={`/products/${p.product_id}`}>
              <img
                src={`http://127.0.0.1:8000/${p.image}`}
                alt={p.product_name}
                className="w-full h-40 object-contain mb-6"
              />

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase text-gray-700">
                  Product Name
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  ${p.product_price}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{p.brand}</p>

              <button className="mt-auto bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded-lg">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="flex justify-center mt-12">
        <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium text-sm py-3 px-6 rounded-full">
          View all products
        </button>
      </div>
    </div>
  );
};

export default ProductList;
