import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axiosInstance from "../api/axiosInstance";
import axios from "axios";
import { BASE_URL } from "../api/AuthApi";

const purchases = [
  {
    id: 1,
    image: "https://via.placeholder.com/100x60",
    name: "Cisco Example",
    date: "January 15 2025",
    quantity: 2,
    amount: "$2999",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100x60",
    name: "Cisco Example",
    date: "January 15 2025",
    quantity: 2,
    amount: "$2999",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/100x60",
    name: "Cisco Example",
    date: "January 15 2025",
    quantity: 2,
    amount: "$2999",
  },
];

const Profile = () => {
  const [UserData, setUserData] = useState({});
  const { setLoading, setIsAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axiosInstance.get("profile/");
      setUserData(response.data);
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    const access = localStorage.getItem("access_token");
    const refresh = localStorage.getItem("refresh_token");
    setLoading(true);

    try {
      await axiosInstance.post(`logout/`, JSON.stringify({ refresh }));
      // clear tokens & auth state regardless of outcome
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setIsAuthenticated(false);
      setLoading(false);

      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  return (
    <div className="p-6 h-screen space-y-10 max-w-6xl mx-auto">
      {/* Profile Card */}
      <div className="bg-white shadow-md p-6 rounded-md flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">My Profile</h2>
          <p>
            <span className="font-semibold">Username:</span> {UserData.username}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {UserData.email}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Purchase History Table */}
      <div className="bg-white shadow-md p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Purchase History</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Product Image</th>
                <th className="pb-2">Product Name</th>
                <th className="pb-2">Purchase Date</th>
                <th className="pb-2">Quantity</th>
                <th className="pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-auto object-contain"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.quantity}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
