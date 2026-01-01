import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ||  "https://eventease-production-9ab0.up.railway.app/api",
});

export default API;
