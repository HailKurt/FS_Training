import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000/";

export const handleLogin = async (
  username,
  password,
  setMessage,
  setIsAuthenticated
) => {
  try {
    const response = await axios.post(`${BASE_URL}api/token/`, {
      username,
      password,
    });
    setMessage("Login Succesfully");
    setIsAuthenticated(true);
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
  } catch (err) {
    setIsAuthenticated(false);
    setMessage("Invalid Username or Password");
    console.log(err);
  }
};
