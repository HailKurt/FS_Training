import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../api/AuthApi";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState();
  const { setIsAuthenticated } = useContext(AuthContext);
  const nav = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await handleLogin(
      formData.username,
      formData.password,
      setMessage,
      setIsAuthenticated
    );

    if (localStorage.getItem("access_token")) {
      nav("/profile", { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Sign In</h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-600 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}

          {message && <p className="text-red-600 text-sm mt-1">{message}</p>}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Login
        </button>

        {/* Link */}
        <div className="mt-4 text-center">
          <Link
            to="/register"
            className="text-sm text-gray-600 hover:underline"
          >
            Don’t have account yet?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
