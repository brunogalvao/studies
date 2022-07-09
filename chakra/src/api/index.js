import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  // baseURL: import.meta.env.REACT_BASE_URL,
  // baseURL: process.env.REACT_BASE_URL,
});

export default api;