import axios from "axios";
import jwtDecode from "jwt-decode";

const url = "http://localhost:8765/api";

const tokenKey = "privateUserToken";

const getToken = () => {
  return localStorage.getItem(tokenKey);
};
const setUser = (userToken) => {
  localStorage.setItem(tokenKey, userToken);
};
// api calling func to register a user
const registerUser = (user) => {
  return axios.post(`${url}/users.json`, user);
};
// to login a user
const loginUser = (credential) => {
  return axios.post(`${url}/users/login.json`, credential);
};
const getCurrentUser = () => {
  try {
    const user = jwtDecode(localStorage.getItem(tokenKey));
    return user;
  } catch (ex) {
    return null;
  }
};
const logout = () => {
  localStorage.removeItem(tokenKey);
};

export default {
  registerUser,
  tokenKey,
  getCurrentUser,
  logout,
  loginUser,
  getToken,
  setUser,
};
